import * as React from 'react';
import { render } from 'react-dom';
import './styles/app.scss';

const App = () => {
  return (
    <div className="container">
      Hello, World!
    </div>
  )
};

render(<App/>, document.querySelector("#root"));
