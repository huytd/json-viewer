import * as React from 'react';
import './styles.scss';

export const Record = ({ children }) => {
  return (
    <div className="json-record">
      {children}
    </div>
  )
};

export const Key = ({ children }) => {
  return (
    <div className="json-record-key">
      {children}
    </div>
  )
};

export const Value = ({ children }) => {
  return (
    <div className="json-record-value">
      {children}
    </div>
  )
};
