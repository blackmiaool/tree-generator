const main=require("../index.js");

document.querySelector("#submit").addEventListener('click',()=>{
    const input=document.querySelector("#input").value ;
    document.querySelector("#output").value=main(JSON.parse(input));
});