import './styles/app.scss';

import * as React from 'react';
import { render } from 'react-dom';

import { JsonRecord } from './components/json-viewer';

const App = () => {
  const singleEntryData = {
    foo: 'bar'
  };

  const singleEntryWithArrayData = {
    foo: [1,2,3,4,5]
  };

  const nestedObjectData = {
    foo: {
      inner_foo: 'hello'
    },
    bar: [
      {
        inner: 'foo'
      },
      {
        inner: 'bar'
      }
    ]
  };

  return (
    <div className="container">
      {/* Single entry case */}
      <JsonRecord data={singleEntryData} />

      <hr/>

      {/* Single entry with array value */}
      <JsonRecord data={singleEntryWithArrayData} />

      <hr/>

      {/* Nested object case */}
      <JsonRecord data={nestedObjectData} />

    </div>
  )
};

render(<App/>, document.querySelector("#root"));
