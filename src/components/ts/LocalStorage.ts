export function putLS (variablName: string, value: string){
  localStorage.setItem(variablName, JSON.stringify(value));
  return getLS(variablName);
}

export function getLS (variablName: string){
  const value = localStorage.getItem(variablName);
  if (value != null) return JSON.parse(value);
}

export function delLS (variablName: string) {
  return localStorage.removeItem(variablName);
}

export function initLS (variablName: string, defaultValue: string) {
  if (!getLS(variablName)) {
    putLS (variablName, defaultValue);
    return defaultValue;
  } else {
    return getLS(variablName);
  }
}