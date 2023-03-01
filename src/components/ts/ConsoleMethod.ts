export function printCard (message: string) {
  message = '%c' + message;
  console.log(message, `color: white; 
  font-weight: 700; 
  background-color: #E91E63; 
  padding: 1rem; 
  margin: 1rem; 
  border-radius: 0.5rem; 
  text-shadow: #1d1d1d70 0.1em 0.1em 0.3em;`);
}
