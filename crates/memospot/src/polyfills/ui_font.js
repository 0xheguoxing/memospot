/*
 * UI font polyfill.
 *
 * Injected on every page load to render the bundled Memos interface with the
 * same font as the Memospot windows: Sarasa Gothic UI Nerd Font (更纱黑体 UI),
 * falling back to Source Han Sans (思源黑体) and then the platform defaults.
 *
 * Only inherited text is restyled: monospace elements keep their own stack, so
 * code blocks and aligned columns stay intact.
 *
 * Sarasa has no Medium face, so `font-weight: 500` silently resolves to
 * SemiBold: the smallest real step above Regular, and bolder requests (700)
 * still reach Bold. The root size is one step below the browser default for
 * the same reason as in the Memospot UI: Sarasa reads visually larger.
 */
(() => {
    if (document.getElementById("memospot-ui-font")) {
        return;
    }

    const fontStack = [
        '"Sarasa UI SC Nerd Font"',
        '"更纱黑体 UI SC Nerd Font"',
        '"Source Han Sans SC"',
        '"思源黑体"',
        "system-ui",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        '"Noto Sans"',
        "sans-serif"
    ].join(", ");

    const style = document.createElement("style");
    style.id = "memospot-ui-font";
    style.textContent = `
    html {
      font-size: 15px !important;
    }

    html, body, button, input, select, textarea {
      font-family: ${fontStack} !important;
      font-weight: 500 !important;
    }
  `;
    (document.head ?? document.documentElement).appendChild(style);
})();
