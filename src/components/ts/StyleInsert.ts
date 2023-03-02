export function insertStyleById(id: string, style: string) {
  removeStyleById(id);
  const insertStyle = document.createElement('style');
  insertStyle.id = id;
  insertStyle.innerHTML = style;
  document.head.appendChild(insertStyle);
}

export function removeStyleById(id: string) {
  const removeElement = document.getElementById(id);
  if (removeElement != null) document.head.removeChild(removeElement);
}

export function insertElementStyleById(id: string, element: any, style: string) {
  removeElementStyleById(id, element);
  const insertStyle = document.createElement('style');
  insertStyle.id = id;
  insertStyle.innerHTML = style;
  element.appendChild(insertStyle);
}

export function removeElementStyleById(id: string, element: any) {
  const removeElement = document.getElementById(id);
  if (removeElement != null) element.removeChild(removeElement);
}