import React from 'react'

function Dropdown({ records, reduceListItem }) {
    return (
        <div className="r-select__options">
            <ul className="r-select__list" >
            {
            records.map(record => (
                <li key={record.id} className="r-select__item" >
                {
                    reduceListItem(record)
                }
                </li>
            ))
            }
            </ul>
        </div>
    )
}

export default Dropdown
