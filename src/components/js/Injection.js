export function injectionRegister(rawHTML) {
  // Plugin register
  const customTheme = document.createElement('dom-module');
  customTheme.innerHTML = rawHTML;
  customTheme.register('theme-plugin');

  // Plugin install
  Gerrit.install(plugin => {
    plugin.registerStyleModule("app-theme", "theme-plugin");
  });

}