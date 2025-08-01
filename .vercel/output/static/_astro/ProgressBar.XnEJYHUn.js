import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.6otl1p8d.js";function c({currentStep:a}){const t=[{key:"application",label:"Application",stepNumber:1},{key:"review",label:"Review",stepNumber:2},{key:"confirmation",label:"Confirmation",stepNumber:3}],i=t.findIndex(s=>s.key===a);return e.jsx("div",{className:"w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"flex items-center justify-between",children:t.map((s,l)=>{const r=l<i,m=l===i;return e.jsxs("div",{className:"flex items-center flex-1",children:[e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("div",{className:`
                      flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base font-semibold
                      ${r||m?"bg-[#e41f26] text-white":"bg-[#003b71] text-white"}
                    `,children:s.stepNumber}),e.jsx("div",{className:"ml-2 sm:ml-3",children:e.jsx("p",{className:`
                        text-sm sm:text-base font-medium
                        ${m?"text-[#e41f26] font-semibold":r?"text-gray-900":"text-[#003b71]"}
                      `,children:s.label})})]}),l<t.length-1&&e.jsx("div",{className:"flex-1 mx-2 sm:mx-4",children:e.jsx("div",{className:`
                        h-0.5 sm:h-1 rounded-full
                        ${r?"bg-[#e41f26]":"bg-gray-300"}
                      `})})]},s.key)})})})})}export{c as default};
