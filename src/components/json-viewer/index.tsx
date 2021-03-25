import './styles.scss';
import * as React from 'react';
import {getPrefix, getSuffix} from '~/lib/utils';

export const JsonRecord = ({ data }) => {
  return (
    <React.Fragment>
      {getPrefix(data)}
      {Object.keys(data).map((key: string) => (
        <div className="json-record" key={key}>
          <Key>{key}</Key>
          {typeof data[key] !== 'object' ? (
            <Value>{data[key]}</Value>
          ) : (
            <JsonRecord data={data[key]} />
          )},
        </div>
      ))}
      {getSuffix(data)}
    </React.Fragment>
  )
};

const Key = ({ children }) => {
  return (
    <div className="json-record-key">
      {children}:
    </div>
  )
};

const Value = ({ children }) => {
  const valueType = typeof children;
  return (
    <div className="json-record-value" data-type={valueType}>
      {getPrefix(children)}
      {children}
      {getSuffix(children)}
    </div>
  )
};
