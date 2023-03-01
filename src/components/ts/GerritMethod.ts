export function isGerritEnvironment() {
  const gerritFooter = document.querySelector("head > title")!.innerHTML;

  if (/Gerrit Code Review/.test(gerritFooter)) {
    return true;
  } else {
    return false;
  }
}

export function getGerritMainHeader() {
  const mainHeader = document.getElementById("pg-app")!.shadowRoot!.getElementById("app-element")!.shadowRoot!.getElementById("mainHeader")!.shadowRoot;
  return mainHeader;
}
