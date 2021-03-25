export const isObject = (input: any) => typeof input === 'object';
export const isArray = (input: any) => Array.isArray(input);
export const isString = (input: any) => typeof input === 'string';

export const getPrefix = (input: any) =>
  isObject(input) ? (
    isArray(input) ? '[' : '{'
  ) : (
    isString(input) ? '"' : ''
  );

export const getSuffix = (input: any) =>
  isObject(input) ? (
    isArray(input) ? ']' : '}'
  ) : (
    isString(input) ? '"' : ''
  );
