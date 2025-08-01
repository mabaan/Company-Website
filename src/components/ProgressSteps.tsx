type Props = {
  currentStep: number; // 1, 2, or 3
};

const ProgressSteps: React.FC<Props> = ({ currentStep }) => {
  return (
    <div className="w-full max-w-3xl mx-auto pt-12 flex items-center justify-between relative">
      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${
            currentStep >= 1 ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          1
        </div>
        <p
          className={`mt-2 text-sm font-medium ${
            currentStep >= 1 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          Fill Details
        </p>
      </div>

      {/* Line between 1 and 2 */}
      <div
        className={`h-1 ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"}`}
        style={{ width: "200px" }}
      />

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${
            currentStep >= 2 ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          2
        </div>
        <p
          className={`mt-2 text-sm font-medium ${
            currentStep >= 2 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          Review
        </p>
      </div>

      {/* Line between 2 and 3 */}
      <div
        className={`h-1 ${currentStep === 3 ? "bg-blue-600" : "bg-gray-300"}`}
        style={{ width: "200px" }}
      />

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${
            currentStep === 3 ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          3
        </div>
        <p
          className={`mt-2 text-sm font-medium ${
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
