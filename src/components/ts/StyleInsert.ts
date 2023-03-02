export function insertStyleById(id: string, style: string) {
  const originalElement = document.getElementById(id);
  if (originalElement) document.head.removeChild(originalElement);

  const insertStyle = document.createElement('style');
  insertStyle.id = id;
  insertStyle.innerHTML = style;
  document.head.appendChild(insertStyle);
}

export function removeStyleById(id: string) {
  const removeElement = document.getElementById(id);
  if (removeElement != null) document.removeChild(removeElement);
}