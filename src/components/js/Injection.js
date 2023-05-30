export function injectionRegister(style) {
  const waitInsertStyle = document.createElement('style');
  waitInsertStyle.innerHTML = style;

  // Plugin install
  Gerrit.install(plugin => {
    // https://gerrit-review.googlesource.com/c/gerrit/+/331259/1/polygerrit-ui/app/api/plugin.ts#95
    // DEPRECATED: Just add <style> elements to `document.head`.
    // plugin.registerStyleModule("app-theme", "theme-plugin");
    document.head.appendChild(waitInsertStyle);
  });
}