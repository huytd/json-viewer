import * as React from 'react';
import { render } from 'react-dom';

import './styles/app.scss';

import { Record, Key, Value } from './components/json-viewer';

const App = () => {
  return (
    <div className="container">
      {/* Single entry case */}
      <Record>
        <Key>foo</Key>
        <Value>bar</Value>
      </Record>

      {/* Single entry with array value */}
      <Record>
        <Key>foo</Key>
        <Value>{[1,2,3,4,5]}</Value>
      </Record>

      {/* Nested object case */}
      <Record>
        <Key>foo2</Key>
        <Value>
          <Record>
            <Key>inner_foo</Key>
            <Value>hello</Value>
          </Record>
          <Record>
            <Key>inner_foo2</Key>
            <Value>hello2</Value>
          </Record>
        </Value>
      </Record>
    </div>
  )
};

render(<App/>, document.querySelector("#root"));
