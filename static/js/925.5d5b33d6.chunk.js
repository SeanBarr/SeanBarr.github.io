"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[925],{925:function(e,a,r){r.r(a),r.d(a,{default:function(){return j}});var s=r(413),n=r(885),c=r(987),t=r(694),o=r.n(t),i=r(791),l=r(341),d=r(162),f=r(184),m=["as","bsPrefix","variant","size","active","className"],x=i.forwardRef((function(e,a){var r=e.as,t=e.bsPrefix,i=e.variant,x=e.size,u=e.active,v=e.className,p=(0,c.Z)(e,m),b=(0,d.vE)(t,"btn"),Z=(0,l.FT)((0,s.Z)({tagName:r},p)),h=(0,n.Z)(Z,2),N=h[0],g=h[1].tagName;return(0,f.jsx)(g,(0,s.Z)((0,s.Z)((0,s.Z)({},p),N),{},{ref:a,className:o()(v,b,u&&"active",i&&"".concat(b,"-").concat(i),x&&"".concat(b,"-").concat(x),p.href&&p.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1};var u=x,v=["bsPrefix","className","as"],p=["xxl","xl","lg","md","sm","xs"],b=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.as,i=void 0===t?"div":t,l=(0,c.Z)(e,v),m=(0,d.vE)(r,"row"),x="".concat(m,"-cols"),u=[];return p.forEach((function(e){var a,r=l[e];delete l[e],a=null!=r&&"object"===typeof r?r.cols:r;var s="xs"!==e?"-".concat(e):"";null!=a&&u.push("".concat(x).concat(s,"-").concat(a))})),(0,f.jsx)(i,(0,s.Z)((0,s.Z)({ref:a},l),{},{className:o().apply(void 0,[n,m].concat(u))}))}));b.displayName="Row";var Z=b,h=r(677),N=r(140),g=r(22),j=function(e){var a=e.repos,r=["seanbarr","seanbarr.github.io"],s=a.filter((function(e){return!r.includes(e.name)})).map((function(e){return(0,f.jsx)(h.Z,{children:(0,f.jsxs)(N.Z,{className:"container card text-center card-size text-white fs-5 border-0 shadow-lg",children:[(0,f.jsx)(N.Z.Img,{className:"repo-img",src:"https://github.com/SeanBarr/".concat(e.name,"/blob/main/image/preview.png?raw=true")}),(0,f.jsxs)(N.Z.ImgOverlay,{className:"d-flex flex-column bg-dark switch-opacity justify-content-center text-center",children:[(0,f.jsx)(N.Z.Title,{className:"text-info",as:"p",children:e.name.replace(/[-]/g," ").toUpperCase()}),(0,f.jsx)(N.Z.Text,{className:"mt-4",children:e.description}),(0,f.jsxs)("div",{className:"d-flex justify-content-evenly mt-4",children:[(0,f.jsx)(u,{variant:"outline-info",href:e.html_url,target:"_blank",rel:"noopener noreferrer external",children:"Source Code"}),(0,f.jsx)(u,{variant:"outline-info",href:e.homepage,target:"_blank",rel:"noopener noreferrer external",children:"Live Demo"})]})]})]})},e.id)}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(g.Z,{children:[(0,f.jsx)("h1",{className:"d-flex align-items-center justify-content-center pb-3",children:"Projects"}),(0,f.jsx)(Z,{className:"g-4",xxl:3,lg:2,md:1,xs:1,children:s})]})})}},140:function(e,a,r){r.d(a,{Z:function(){return I}});var s=r(413),n=r(987),c=r(694),t=r.n(c),o=r(791),i=r(162),l=r(543),d=r(472),f=r(184),m=["bsPrefix","className","variant","as"],x=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.variant,l=e.as,d=void 0===l?"img":l,x=(0,n.Z)(e,m),u=(0,i.vE)(r,"card-img");return(0,f.jsx)(d,(0,s.Z)({ref:a,className:t()(o?"".concat(u,"-").concat(o):u,c)},x))}));x.displayName="CardImg";var u=x,v=r(40),p=["bsPrefix","className","as"],b=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,l=e.as,d=void 0===l?"div":l,m=(0,n.Z)(e,p),x=(0,i.vE)(r,"card-header"),u=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return(0,f.jsx)(v.Z.Provider,{value:u,children:(0,f.jsx)(d,(0,s.Z)((0,s.Z)({ref:a},m),{},{className:t()(c,x)}))})}));b.displayName="CardHeader";var Z=b,h=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,d.Z)("h5"),g=(0,d.Z)("h6"),j=(0,l.Z)("card-body"),y=(0,l.Z)("card-title",{Component:N}),P=(0,l.Z)("card-subtitle",{Component:g}),w=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),k=(0,l.Z)("card-footer"),E=(0,l.Z)("card-img-overlay"),R=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.bg,l=e.text,d=e.border,m=e.body,x=e.children,u=e.as,v=void 0===u?"div":u,p=(0,n.Z)(e,h),b=(0,i.vE)(r,"card");return(0,f.jsx)(v,(0,s.Z)((0,s.Z)({ref:a},p),{},{className:t()(c,b,o&&"bg-".concat(o),l&&"text-".concat(l),d&&"border-".concat(d)),children:m?(0,f.jsx)(j,{children:x}):x}))}));R.displayName="Card",R.defaultProps={body:!1};var I=Object.assign(R,{Img:u,Title:y,Subtitle:P,Body:j,Link:w,Text:C,Header:Z,Footer:k,ImgOverlay:E})},677:function(e,a,r){var s=r(885),n=r(413),c=r(987),t=r(694),o=r.n(t),i=r(791),l=r(162),d=r(184),f=["as","bsPrefix","className"],m=["className"],x=["xxl","xl","lg","md","sm","xs"];var u=i.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,s=e.className,t=(0,c.Z)(e,f);r=(0,l.vE)(r,"col");var i=[],d=[];return x.forEach((function(e){var a,s,n,c=t[e];delete t[e],"object"===typeof c&&null!=c?(a=c.span,s=c.offset,n=c.order):a=c;var o="xs"!==e?"-".concat(e):"";a&&i.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=n&&d.push("order".concat(o,"-").concat(n)),null!=s&&d.push("offset".concat(o,"-").concat(s))})),[(0,n.Z)((0,n.Z)({},t),{},{className:o().apply(void 0,[s].concat(i,d))}),{as:a,bsPrefix:r,spans:i}]}(e),t=(0,s.Z)(r,2),i=t[0],u=i.className,v=(0,c.Z)(i,m),p=t[1],b=p.as,Z=void 0===b?"div":b,h=p.bsPrefix,N=p.spans;return(0,d.jsx)(Z,(0,n.Z)((0,n.Z)({},v),{},{ref:a,className:o()(u,!N.length&&h)}))}));u.displayName="Col",a.Z=u}}]);
//# sourceMappingURL=925.5d5b33d6.chunk.js.map