(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(132),c=t(142),m=t(129);a.default=function(e){const{metadata:a,items:t}=e,{allTagsPath:n,name:s,count:o}=a;return l.a.createElement(r.a,{title:`Posts tagged "${s}"`,description:`Blog | Tagged "${s}"`},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("main",{className:"col col--8 col--offset-2"},l.a.createElement("h1",null,o," ",function(e,a){return e>1?`${a}s`:a}(o,"post"),' tagged with "',s,'"'),l.a.createElement(m.a,{href:n},"View All Tags"),l.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>l.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null))))))))}}}]);