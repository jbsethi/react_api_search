import React, { useState } from 'react'
import useFetch from './useFetch'
import './main.css'

const selectStyle = (color) => {
  const style = {}
  
  style.borderColor = color || '#1D273E'

  return style
}

const Select = ({
  url,      // API url from where you want to get data
  prepend,  // If you want to prepend anything to the input
  append,   // If you want to append anuthing to the input
  color,     // Primary color of the select container
  reduceRecord,
  reduceListItem,
  children
}) => {
  const style = selectStyle(color)

  const [isFocused, setIsFocused] = useState(false)
  const [queryinput, setQueryInput] = useState('')
  const [queryString, setQueryString] = useState('')

  const { loading, records } = useFetch(url, queryString, reduceRecord)

  const searchQueryString = () => {
    setQueryString(queryinput)
  }

  return (
    <div style={style} className="r-select">
        {
          (prepend !== undefined) &&
          <div className="r-select__preppend">
            {prepend}
          </div>
        }
        <div className="r-select__body">
          <input
            type="text"
            value={queryinput}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onInput={(e) => setQueryInput(e.target.value)}
          />
          {
            isFocused &&
            !loading &&
            records.length > 0 &&
            <div className="r-select__options">
              <ul className="r-select__list" style={style} >
              {
                records.map(record => (
                  <li key={record.id} className="r-select__item" style={style} >
                    {
                      reduceListItem(record)
                    }
                  </li>
                ))
              }
              </ul>
            </div>
          }
        </div>
        {
          append &&
          <div className="r-select__append">
          {append}
          </div>
        }

        <div className="r-select__trigger">
          <button
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onClick={() => searchQueryString()}
          >
            Search
          </button>
        </div>
    </div>
  )
};

export default Select
