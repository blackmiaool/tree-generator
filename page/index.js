const JSON5 = require('json5');
const main = require("../index.js");

document.querySelector("#submit").addEventListener('click', () => {
    const input = document.querySelector("#input").value;

    document.querySelector("#output").value = main(JSON5.parse(input.replace(/[;\s]+$/, '')));
});
