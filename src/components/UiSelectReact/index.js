import React, { useState, useRef } from 'react'
import useFetch from './useFetch'
import Dropdown from './dropdown'
import './main.css'

const Select = ({
  url,      // API url from where you want to get data
  reduceRecord,
  reduceListItem
}) => {
  const queryInput = useRef('')
  const [isFocused, setIsFocused] = useState(false)
  const [queryString, setQueryString] = useState('')

  const { loading, records } = useFetch(url, queryString, reduceRecord)

  const searchQueryString = () => {
    setQueryString(queryInput.current.value)
  }

  return (
    <div className="r-select" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        <div className="r-select__body">
          <input type="text" ref={queryInput} />
          {
            isFocused &&
            !loading &&
            records.length > 0 &&
            <Dropdown records={records} reduceListItem={reduceListItem} />
          }
        </div>

        <div className="r-select__trigger">
          <button onClick={() => searchQueryString()} >
            Search
          </button>
        </div>
    </div>
  )
};

export default Select
