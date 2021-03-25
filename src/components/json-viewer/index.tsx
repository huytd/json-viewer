import './styles.scss';
import * as React from 'react';
import {getPrefix, getSuffix, isObject} from '~/lib/utils';

interface JsonRecordProps {
  data: any
}

interface GenericProps {
  children: any
}

export const JsonRecord = ({ data }: JsonRecordProps) => {
  return (
    <React.Fragment>
      {getPrefix(data)}
      {Object.keys(data).map((key: string) => (
        <div className="json-record" key={key}>
          <Key>{key}</Key>
          {!isObject(data[key]) ? (
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

const Key = ({ children }: GenericProps) => {
  return (
    <div className="json-record-key">
      {children}:
    </div>
  )
};

const Value = ({ children }: GenericProps) => {
  const valueType = children === null ? "null" : typeof children;
  return (
    <div className="json-record-value" data-type={valueType}>
      {getPrefix(children)}
      {children?.toString() || "null"}
      {getSuffix(children)}
    </div>
  )
};
