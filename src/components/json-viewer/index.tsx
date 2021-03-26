import './styles.scss';
import * as React from 'react';
import {useState} from 'react';
import {getPrefix, getSuffix, isObject, isToggleable} from '~/lib/utils';

interface JsonRecordProps {
  data: any
}

interface GenericProps {
  children: any
}

interface ToggleButtonProps {
  collapsed: boolean,
  visible: boolean,
  onClick: React.MouseEventHandler
}

interface JsonRecordItemProps {
  itemKey: string,
  data: any
}

const ToggleButton = ({
  collapsed = false,
  visible = false,
  onClick
}: ToggleButtonProps) => {
  return visible ? (
    <button className="json-record-toggle-button" onClick={onClick}>
      { collapsed ? "+" : "-"}
    </button>
  ) : null;
};

const CollapsedItem = () => <span className="json-record-collapsed-item">...</span>;

const JsonRecordItem = ({ itemKey, data }: JsonRecordItemProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const value = data[itemKey];

  const toggleButtonHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="json-record">
      <ToggleButton
        visible={isToggleable(value)}
        collapsed={collapsed}
        onClick={toggleButtonHandler}
      />
      <Key>{itemKey}</Key>
      {!isObject(value) ? (
        <Value>{value}</Value>
      ) : (
        !collapsed ? <JsonRecord data={value} /> : <CollapsedItem/>
      )},
    </div>
  )
};

export const JsonRecord = ({ data }: JsonRecordProps) => {
  return (
    <React.Fragment>
      {getPrefix(data)}
      {Object.keys(data).map((key: string) => (
        <JsonRecordItem
          key={key}
          itemKey={key}
          data={data}
        />
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
