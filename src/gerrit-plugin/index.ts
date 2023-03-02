import { injectionRegister } from '../components/js/Injection'
import { printCard } from '../components/ts/ConsoleMethod'
import { isGerritEnvironment, getGerritMainHeader } from '../components/ts/GerritMethod'
import { createApp, h } from 'vue'
import ToolsView from '../components/vue/ToolsView.vue'

printCard('Mia-Theme Vue Plugin by keiko233 & ReallySnow');

const headerHTMl = `<template>
  <style>
    html {
      --header-background-color: var(--theme-primary);
      --header-text-color: #fff;
      --header-title-content: "Project Mia";
      --header-padding: 6px;
      --header-box-shadow: var(--theme-primary-shadow);
      --border-radius: var(--border-radius);
    }
  </style>
</template>`;

if (isGerritEnvironment()) {
  console.log('Is Gerrit environment, inject Register.')
  injectionRegister(headerHTMl);
} else {
  console.log('Not Gerrit environment, skip inject.')
}


if (isGerritEnvironment()) {
  const gerritMainHeader = getGerritMainHeader();

  gerritMainHeader!.querySelector("gr-endpoint-decorator")!.innerHTML = `
  <div style="min-width:120px;font-family:var(--font-family,&quot;&quot;),&quot;Roboto&quot;,Arial,sans-serif;font-weight:400;line-height:20px;"></div>
    <div style="font-size:20px">
      <div style="font-size:.8em;">Project Mia</div>
      <div>Code Review</div>
    </div>
  </div>`;

  const insertMainHeaderStyle = document.createElement('style');
  insertMainHeaderStyle.innerHTML = `
  .loginButton {
    background-color:#ff787eab;
    border-radius:var(--border-radius);
    text-decoration:none;
    color:white!important;
    border:1px solid #ffffffff;
    margin-left:10px;
  }
  .accountContainer {
    overflow: initial !important;
  }`;
  gerritMainHeader?.appendChild(insertMainHeaderStyle);
}

if (isGerritEnvironment()) {
  const vueLoader = document.body.appendChild(document.createElement('div'));
  createApp(h(ToolsView)).mount(vueLoader);
}