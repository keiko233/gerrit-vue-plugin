import { getGerritMainHeader, isGerritEnvironment } from '../../../ts/GerritMethod'
import { insertElementStyleById, removeElementStyleById } from '../../../ts/StyleInsert'
import { insertElementById } from '../../../ts/ElementInsert'
import { initLS } from '../../../ts/LocalStorage'
import { ref } from 'vue'

export const enableThemeSidebarLinks = ref(initLS('enableThemeSidebarLinks', false));

const style = `nav a.bigTitle {
  display: flex;
  align-items: center;
}

nav div#menu-button {
  height: 42px;
  width: 42px;
  position: absolute;
  left: 184px;
  background-color: var(--background-overlay);
  border-radius: 50%;
  padding: 4px;
}

nav ul.links  {
  position: absolute;
  background-color: var(--theme-primary-notransparency);
  top: 0;
  left: 0;
  height: 100vh;
  max-width: 0;
  z-index: 10;
  padding: 0;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
}

nav ul.links.show {
  opacity: 1 !important;
  padding: 10px;
  max-width: 180px !important;
  visibility: visible;
}

nav ul.links li {
  width: 100%;
  padding: 6px 0;
}

div#close-sidebar-links {
  padding: 8px 6px;
  margin: 4px;
  background-color: var(--background-overlay);
  border-radius: var(--border-radius);
  color: var(--text-primary-color);
  font-weight: 700;
}`;

const menuButton = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: var(--header-text-color);">
  <path d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" />
</svg>`;

export function insertSidebarLinksStyle() {
  if (isGerritEnvironment()) {
    const gerritMainHeader = getGerritMainHeader();
    const ulLinks = gerritMainHeader!.querySelector("nav > ul");
    const nav = gerritMainHeader!.querySelector("nav");

    console.log('Is Gerrit environment, inject sidebar-links.');
    insertElementStyleById('sidebar-links', gerritMainHeader, style);

    insertElementById('menu-button', nav, menuButton).onclick = () => {
      const navUlClassList = gerritMainHeader!.querySelector("nav > ul")!.classList;
      if (!navUlClassList.contains('show')) {
        navUlClassList.add('show');
      } else {
        navUlClassList.remove('show');
      }
    }

    insertElementById('close-sidebar-links', ulLinks, 'Close').onclick = () => {
      ulLinks!.classList.remove('show');
    };

  } else {
    console.log('Not Gerrit environment, skip inject sidebar-links.');
  }
}
