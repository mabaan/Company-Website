import React from "react";

type Props = {
  step: 1 | 2 | 3;
};

const steps = [
  { label: "1. Fill Details", id: 1 },
  { label: "2. Review", id: 2 },
  { label: "3. Submit", id: 3 },
];

const ProgressSteps: React.FC<Props> = ({ step }) => {
  return (
    <div className="flex items-center justify-between mb-8 text-sm sm:text-base text-gray-600 font-medium">
      {steps.map((s) => (
        <span
          key={s.id}
          className={`
            transition
            ${step === s.id ? "opacity-100" : "opacity-50"}
          `}
        >
          {s.label}
        </span>
      ))}
    </div>
  );
};

export default ProgressSteps;
