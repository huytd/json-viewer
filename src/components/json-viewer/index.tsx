import './styles.scss';
import * as React from 'react';
import {getPrefix, getSuffix} from '~/lib/utils';

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

const Key = ({ children }: GenericProps) => {
  return (
    <div className="json-record-key">
      {children}:
    </div>
  )
};

const Value = ({ children }: GenericProps) => {
  const valueType = typeof children;
  return (
    <div className="json-record-value" data-type={valueType}>
      {getPrefix(children)}
      {children.toString()}
      {getSuffix(children)}
    </div>
  )
};
