!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="dcf56212-c287-4a34-b430-0496c5652e56",e._sentryDebugIdIdentifier="sentry-dbid-dcf56212-c287-4a34-b430-0496c5652e56")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"d66e17c57580503307e4eddf219b730d2f5a3d18"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[2337],{38626:function(e,t,n){var o=n(87462),f=n(29439),i=n(45987),d=n(67294),r=n(93416),u=n(64637),c=n(82351),a=["text","TextComponent"];t.Z=function(e){var t=e.text,n=e.TextComponent,s=void 0===n?r.Text:n,l=(0,i.Z)(e,a),b=(0,d.useState)(""),h=(0,f.Z)(b,2),g=h[0],w=h[1],y=(0,d.useState)(),p=(0,f.Z)(y,2),v=p[0],x=p[1];return(0,d.useEffect)((function(){if(v){for(var e=v.offsetWidth,n=0;v.scrollWidth>e;)v.textContent=(0,u.a)(v.textContent,n),n+=1;v.textContent!==t&&w(t)}}),[t,v]),d.createElement(c.Z,{content:g?t:"",align:"bottom",isBasic:!0},d.createElement(s,(0,o.Z)({truncate:!0,ref:x},l),t))}},24281:function(e,t,n){var o=n(29439),f=n(67294),i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.Z=function(){var e=(0,f.useState)(null),t=(0,o.Z)(e,2),n=t[0],d=t[1],r=(0,f.useState)(i),u=(0,o.Z)(r,2),c=u[0],a=u[1],s=(0,f.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,n=t.x,o=t.y,f=t.width,i=t.height,d=t.top,r=t.left,u=t.bottom,c=t.right;a({x:n,y:o,width:f,height:i,top:d,left:r,bottom:u,right:c})}}))}),[]);return(0,f.useLayoutEffect)((function(){if(n)return s.observe(n),function(){s.disconnect()}}),[n]),[d,c]}}}]);