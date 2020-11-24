"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var colors_1 = require("@material-ui/core/colors");
var theme = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: colors_1.red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
exports.default = theme;
//# sourceMappingURL=theme.js.map