import React from 'react';
import ReactDOM from 'react-dom';
import UiSelectReact from './components/UiSelectReact/index'
import './main.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <UiSelectReact
        url="https://www.googleapis.com/books/v1/volumes"
        color="green"
        reduceRecord={(record) => record.items}
        reduceListItem={ item => (
          <div>
            <div>ID: {item.id}</div>
            <div>Title: {item.volumeInfo.title}</div>
          </div>
        ) }
      ></UiSelectReact>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
