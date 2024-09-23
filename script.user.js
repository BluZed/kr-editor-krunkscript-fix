// ==UserScript==
// @name         KrunkScript fix
// @namespace    https://github.com/bluzed
// @version      0.0.1
// @description  krunkscript fix for krunker editor (https://krunker.io/editor.html)
// @author       BluZed
// @match        https://krunker.io/scripting.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=krunker.io
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
const patchedCodeMirrorURL = `https://bluzed.github.io/kr-editor-krunkscript-fix/code_mirror_packed.js`;
const log = unsafeWindow.console.log;
let urlPatched = false;
(new MutationObserver((mutations, observer) => {
    for(let mutation of mutations){
        for(let node of mutation.addedNodes){
            if(node.tagName == 'SCRIPT'){
                if(node.src && node.src.startsWith("https://codemirror.net/5")){
                    if(urlPatched){
                        node.src = "";
                        node.remove();
                    }else{
                        node.src = patchedCodeMirrorURL;
                        urlPatched = true;
                    }
                }
            }
        }
    }
})).observe(unsafeWindow.document, {
    childList: true,
    subtree: true,
});
