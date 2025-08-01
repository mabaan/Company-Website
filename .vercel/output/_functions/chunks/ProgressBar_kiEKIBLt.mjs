import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

function ProgressBar({ currentStep }) {
  const steps = [
    { key: "application", label: "Application", stepNumber: 1 },
    { key: "review", label: "Review", stepNumber: 2 },
    { key: "confirmation", label: "Confirmation", stepNumber: 3 }
  ];
  const currentStepIndex = steps.findIndex((step) => step.key === currentStep);
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: steps.map((step, index) => {
    const isCompleted = index < currentStepIndex;
    const isCurrent = index === currentStepIndex;
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `
                      flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base font-semibold
                      ${isCompleted || isCurrent ? "bg-[#e41f26] text-white" : "bg-[#003b71] text-white"}
                    `,
            children: step.stepNumber
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "ml-2 sm:ml-3", children: /* @__PURE__ */ jsx(
          "p",
          {
            className: `
                        text-sm sm:text-base font-medium
                        ${isCurrent ? "text-[#e41f26] font-semibold" : isCompleted ? "text-gray-900" : "text-[#003b71]"}
                      `,
            children: step.label
          }
        ) })
      ] }),
      index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex-1 mx-2 sm:mx-4", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `
                        h-0.5 sm:h-1 rounded-full
                        ${isCompleted ? "bg-[#e41f26]" : "bg-gray-300"}
                      `
        }
      ) })
    ] }, step.key);
  }) }) }) });
}

export { ProgressBar as P };
