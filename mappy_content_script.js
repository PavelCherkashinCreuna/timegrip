function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        scr.src=link;
        (document.head || document.body || document.documentElement).appendChild(scr);
}
function injectSanta(link) {
        var div = document.createElement('div');
        div.className = 'santa-time';
        div.style.backgroundImage = 'url("' + link + '")';
        (document.body || document.documentElement).appendChild(div);
}

injectSanta(chrome.extension.getURL("santa.png"));
injectJs(chrome.extension.getURL("script.js"));