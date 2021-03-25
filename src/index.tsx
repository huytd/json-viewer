import * as React from 'react';
import { render } from 'react-dom';

import './styles/app.scss';

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

      {/* Single entry with array value */}
      <JsonRecord data={singleEntryWithArrayData} />

      {/* Nested object case */}
      <JsonRecord data={nestedObjectData} />
    </div>
  )
};

render(<App/>, document.querySelector("#root"));
