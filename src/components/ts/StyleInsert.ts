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