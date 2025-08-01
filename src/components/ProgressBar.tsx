import React from 'react';

interface ProgressBarProps {
  currentStep: "application" | "review" | "confirmation";
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const steps = [
    { key: "application", label: "Application", stepNumber: 1 },
    { key: "review", label: "Review", stepNumber: 2 },
    { key: "confirmation", label: "Confirmation", stepNumber: 3 },
  ];

  const currentStepIndex = steps.findIndex(step => step.key === currentStep);

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            
            return (
              <div key={step.key} className="flex items-center flex-1">
                {/* Step Circle and Label */}
                <div className="relative flex items-center">
                  <div
                    className={`
                      flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-sm sm:text-base font-semibold
                      ${isCompleted || isCurrent
                        ? 'bg-[#e41f26] text-white' 
                        : 'bg-[#003b71] text-white'
                      }
                    `}
                  >
                    {step.stepNumber}
                  </div>
                  
                  {/* Step Label */}
                  <div className="ml-2 sm:ml-3">
                    <p
                      className={`
                        text-sm sm:text-base font-medium
                        ${isCurrent 
                          ? 'text-[#e41f26] font-semibold' 
                          : isCompleted
                          ? 'text-gray-900' 
                          : 'text-[#003b71]'
                        }
                      `}
                    >
                      {step.label}
                    </p>
                  </div>
                </div>

                {/* Connector Line (don't show after last step) */}
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-2 sm:mx-4">
                    <div
                      className={`
                        h-0.5 sm:h-1 rounded-full
                        ${isCompleted
                          ? 'bg-[#e41f26]' 
                          : 'bg-gray-300'
                        }
                      `}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}