export function insertElementById(id: string, element: any, rawHTML: string) {
  const insertElement = document.createElement('div');
  insertElement.id = id;
  insertElement.innerHTML = rawHTML;
  element!.appendChild(insertElement);
  return insertElement;
}