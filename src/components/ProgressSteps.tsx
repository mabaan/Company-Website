type Props = {
  currentStep: number; // 1, 2, or 3
};

const ProgressSteps: React.FC<Props> = ({ currentStep }) => {
  return (
    <div className="w-full max-w-3xl mx-auto pt-0 flex items-center justify-between relative gap-2 sm:gap-6 md:gap-0">
      {/* Step 1 */}
      <div className="flex flex-col items-center min-w-[54px] sm:min-w-[68px]">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold ${
            currentStep >= 1 ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          1
        </div>
        <p
          className={`mt-2 text-xs sm:text-sm font-medium text-center ${
            currentStep >= 1 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          Fill <br className="block sm:hidden" /> Details
        </p>
      </div>

      {/* Line between 1 and 2 */}
      <div
        className={`hidden md:block flex-1 h-1 mx-2 transition-all duration-300 ${
          currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
        }`}
        style={{ minWidth: 60, maxWidth: 180 }}
      />
      <div
        className={`block md:hidden h-1 w-10 sm:w-16 mx-1 transition-all duration-300 ${
          currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
        }`}
      />

      {/* Step 2 */}
      <div className="flex flex-col items-center min-w-[54px] sm:min-w-[68px]">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold ${
            currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          2
        </div>
        <p
          className={`mt-2 text-xs sm:text-sm font-medium ${
            currentStep >= 2 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          Review
        </p>
      </div>

      {/* Line between 2 and 3 */}
      <div
        className={`hidden md:block flex-1 h-1 mx-2 transition-all duration-300 ${
          currentStep === 3 ? "bg-blue-600" : "bg-gray-300"
        }`}
        style={{ minWidth: 60, maxWidth: 180 }}
      />
      <div
        className={`block md:hidden h-1 w-10 sm:w-16 mx-1 transition-all duration-300 ${
          currentStep === 3 ? "bg-blue-600" : "bg-gray-300"
        }`}
      />

      {/* Step 3 */}
      <div className="flex flex-col items-center min-w-[54px] sm:min-w-[68px]">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-base sm:text-lg font-bold ${
            currentStep === 3 ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          3
        </div>
        <p
          className={`mt-2 text-xs sm:text-sm font-medium ${
            currentStep === 3 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          Submit
        </p>
      </div>
    </div>
  );
};

export default ProgressSteps;
