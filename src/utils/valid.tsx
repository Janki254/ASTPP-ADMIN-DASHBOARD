export const isValidArray = (arr: any) => {
  return arr && Array.isArray(arr) && arr.length > 0;
};

export const isValidObject = (obj: any) => {
  return obj && Object.keys(obj).length > 0;
};
