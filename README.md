# NO LONGER REQUIRED - THIS GOT FIXED

# kr-editor-krunkscript-fix
## How to use?
- install tampermonkey browser extension (click [here](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo))
- install script.user.js from this repo in tampermonkey manually or by clicking [here](https://bluzed.github.io/kr-editor-krunkscript-fix/script.user.js).

## swat's script which also works by rerouting to codemirror mirror without cors (thanks sak):
```js
// ==UserScript==
// @name         Codemirror rerouter
// @description  Reroutes to codemirror mirror without cors
// @author       Swat
// @match        https://krunker.io/editor.html
// @match        https://krunker.io/scripting.html
// @grant        none
// @run-at       document-start
// ==/UserScript==

new MutationObserver(async m => m.forEach(m => m.addedNodes.forEach(m => m.src &&= m.src.replace("codemirror.net", "codemirror-mirror.swatdo.ge")))).observe(document, { childList: true, subtree: true })
```


## how it works
Krunker Editor scripting page has codemirror 5 scripts in the body tag whose urls return a 403 forbidden error code for krunker.io domain. 
I've copy pasted all the code from all the codemirror 5 script files that do not load into a single file (https://bluzed.github.io/kr-editor-krunkscript-fix/code_mirror_packed.js) and then while the Krunker Editor scripting page loads, my script checks for these script tag with broken urls and replaces the first script tag's src with my packed file and deletes rest of the script tags.
This way, Krunker Editor Scripting tab loads fine.
