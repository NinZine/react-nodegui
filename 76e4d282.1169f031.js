(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(148)),i={sidebar_label:"ScrollArea",title:"Scroll Area"},s={unversionedId:"guides/scroll-view",id:"guides/scroll-view",isDocsHomePage:!1,title:"Scroll Area",description:"ScrollArea allows you to display a large content (image, list or even plain text) in an area of predefined size. A scroll area is used to display the contents of a child widget within a frame. If the widget exceeds the size of the frame, the view can provide scroll bars so that the entire area of the child widget can be viewed.",source:"@site/docs/guides/scroll-view.md",slug:"/guides/scroll-view",permalink:"/docs/guides/scroll-view",version:"current",sidebar_label:"ScrollArea",sidebar:"guides",previous:{title:"Handle Events",permalink:"/docs/guides/handle-events"},next:{title:"Images",permalink:"/docs/guides/images"}},l=[{value:"Example",id:"example",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"ScrollArea allows you to display a large content (image, list or even plain text) in an area of predefined size. A scroll area is used to display the contents of a child widget within a frame. If the widget exceeds the size of the frame, the view can provide scroll bars so that the entire area of the child widget can be viewed."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import React from "react";\nimport { Renderer, Text, ScrollArea, Window } from "@nodegui/react-nodegui";\n\nconst App = () => {\n  return (\n    <Window>\n      <ScrollArea>\n        <Text>\n          {`\n            Contrary to popular belief, \n            Lorem Ipsum is not simply random text. \n            It has roots in a piece of classical Latin literature from 45 BC, \n            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, \n            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, \n            and going through the cites of the word in classical literature, \n            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 \n            and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. \n            This book is a treatise on the theory of ethics, very popular during the Renaissance. \n            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n            The standard chunk of Lorem Ipsum used since the 1500s\n            is reproduced below for those interested. \n            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also \n            reproduced in their exact original form, accompanied \n            by English versions from the 1914 translation by H. Rackham.\n\n\n            Why do we use it?\n\n            It is a long established \n            fact that a reader will be distracted by \n            the readable content of a page when looking at its layout. \n            The point of using Lorem Ipsum is that it has \n            a more-or-less normal distribution of letters, \n            as opposed to using \'Content here, content here\', \n            making it look like readable English. \n            Many desktop publishing packages and web page \n            editors now use Lorem Ipsum as their default model text, \n            and a search for \'lorem ipsum\' will uncover many web \n            sites still in their infancy. Various versions \n            have evolved over the years, sometimes by accident, \n            sometimes on purpose (injected humour and the like).\n\n        `}\n        </Text>\n      </ScrollArea>\n    </Window>\n  );\n};\n\nRenderer.render(<App />);\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TLDR;")),Object(a.b)("p",null,"We create a ",Object(a.b)("inlineCode",{parentName:"p"},"<ScrollArea>")," instance and then set the target widget as its child."),Object(a.b)("p",null,"The result would look like this:"),Object(a.b)("img",{src:"https://github.com/nodegui/react-nodegui/releases/download/assets/scrollarea.gif",alt:"scroll area",style:{width:"100%",maxWidth:400}}))}d.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);