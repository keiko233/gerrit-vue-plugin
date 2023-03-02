import { getGerritMainHeader, isGerritEnvironment } from '../../../ts/GerritMethod'
import { insertElementStyleById, removeElementStyleById } from '../../../ts/StyleInsert'
import { insertElementById } from '../../../ts/ElementInsert'
import { initLS } from '../../../ts/LocalStorage'
import { ref } from 'vue'

export const enableThemeSidebarLinks = ref(initLS('enableThemeSidebarLinks', false));

const style = `nav ul.links  {
  position: absolute;
  background-color: var(--theme-primary-notransparency);
  top: 0;
  left: 0;
  height: 100vh;
  max-width: 0;
  z-index: 10;
  padding: 10px;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
}

nav ul.links.show {
  opacity: 1 !important;
  max-width: 180px !important;
  visibility: visible;
}

div#close-sidebar-links {
  padding: 8px 6px;
  margin: 4px;
  background-color: var(--background-overlay);
  border-radius: var(--border-radius);
  color: var(--text-primary-color);
  font-weight: 700;
}`;

export function insertSidebarLinksStyle() {
  if (isGerritEnvironment()) {
    const gerritMainHeader = getGerritMainHeader();
    const ulLinks = gerritMainHeader!.querySelector("nav > ul");
    const bigTitle = gerritMainHeader!.querySelector("nav > a");

    console.log('Is Gerrit environment, inject sidebar-links.');
    insertElementStyleById('sidebar-links', gerritMainHeader, style);

    bigTitle!.addEventListener('click', () => {
      ulLinks!.classList.add('show');
    })

    insertElementById('close-sidebar-links', ulLinks, 'Close').onclick = () => {
      ulLinks!.classList.remove('show');
    };

  } else {
    console.log('Not Gerrit environment, skip inject sidebar-links.');
  }
}
