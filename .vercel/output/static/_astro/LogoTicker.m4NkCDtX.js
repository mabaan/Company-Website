import{j as r}from"./jsx-runtime.EKYJJIwR.js";import"./index.6otl1p8d.js";const i=["ADNOC-removebg-preview","aramco-removebg-preview","BAPCO-removebg-preview","bernard","bonneyforge","bonomi","cranecpe","dafram","gc","HYV","koc-removebg-preview","melesi","PDO-removebg-preview","petronas-removebg-preview","QP-removebg-preview","quam","SNOC-removebg-preview"],t=i.map(a=>({src:`https://res.cloudinary.com/dxrwnc5g4/image/upload/gcintle/resume/${a}.png`,alt:a.replace(/[-_]/g," ").replace(/removebg preview/gi,"").trim()})),o=[...t,...t];function m({className:a=""}){return r.jsxs("div",{className:`py-8 bg-white overflow-x-hidden ${a}`,children:[r.jsx("div",{className:"group relative flex items-center w-max animate-ticker gap-10 sm:gap-16 md:gap-20 lg:gap-24",tabIndex:0,"aria-label":"Trusted by our partners",onMouseEnter:e=>{e.currentTarget.style.animationPlayState="paused"},onMouseLeave:e=>{e.currentTarget.style.animationPlayState="running"},onTouchStart:e=>{e.currentTarget.style.animationPlayState="paused"},onTouchEnd:e=>{e.currentTarget.style.animationPlayState="running"},style:{width:"max-content",minWidth:"100vw"},children:o.map((e,n)=>r.jsx("img",{src:e.src,alt:e.alt,loading:"lazy",draggable:!1,className:`
              h-16 w-auto
              sm:h-20
              md:h-28
              lg:h-32
              xl:h-40
              object-contain
              inline-block
              transition-transform duration-200 hover:scale-105
              select-none
            `,style:{maxWidth:"260px"}},n))}),r.jsx("style",{children:`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
          will-change: transform;
        }
        .group:hover,
        .group:focus,
        .group:active {
          animation-play-state: paused !important;
        }
      `})]})}export{m as default};
