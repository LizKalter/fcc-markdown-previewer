(this["webpackJsonpfcc-markdown-previewer"]=this["webpackJsonpfcc-markdown-previewer"]||[]).push([[0],{14:function(e,n,t){e.exports=t(22)},21:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var o=t(13),a=t(0),r=t.n(a),i=t(12),s=t.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(5),l=t.n(c);t(21);l.a.setOptions({breaks:!0});var u="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";function d(e){return r.a.createElement("textarea",{id:"editor",onChange:e.updateInput,defaultValue:u})}function h(e){return r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:e.output}})}s.a.render(r.a.createElement((function(e){var n=Object(a.useState)(l()(u)),t=Object(o.a)(n,2),i=t[0],s=t[1];return r.a.createElement("div",{className:"markdown-previewer"},r.a.createElement(d,{updateInput:function(e){s(l()(e.target.value))}}),r.a.createElement(h,{output:i}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e032ad4b.chunk.js.map