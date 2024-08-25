export const MuiCssBaseline = {
  styleOverrides: `
:root {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
* {
    -webkit-text-fill-color: inherit !important;
}

a {
    text-decoration: none;
}
html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    width: 100vw;
height: 100vh;
    font-family: inherit !important;
}
`,
};
