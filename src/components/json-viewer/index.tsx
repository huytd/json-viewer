import * as React from 'react';
import './styles.scss';

export const JsonRecord = ({ data }) => {
  return (
    <div className="json-record">
      {Object.keys(data).map((key: string) => (
        <React.Fragment key={key}>
          <Key>{key}</Key>
        {typeof data[key] !== 'object' ? (
          <Value>{data[key]}</Value>
        ) : (
          <JsonRecord data={data[key]} />
        )}
        </React.Fragment>
      ))}
    </div>
  )
};

const Key = ({ children }) => {
  return (
    <div className="json-record-key">
      {children}
    </div>
  )
};

const Value = ({ children }) => {
  return (
    <div className="json-record-value">
      {children}
    </div>
  )
};
