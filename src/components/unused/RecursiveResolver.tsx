import React, { useState } from 'react';
import { Laptop, Server, Search, Globe, Database, Clock, ArrowRight } from 'lucide-react';

export const CompactRecursiveResolver = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Browser needs to find example.com",
      icons: [
        { icon: Laptop, label: "Browser", color: "text-ts-blue-300" }
      ]
    },
    {
      id: 'cache',
      title: "2. Check Local Cache",
      description: "First, check if we already know the IP address",
      icons: [
        { icon: Laptop, label: "Browser", color: "text-ts-blue-300" },
        { icon: Clock, label: "Local Cache", color: "text-ts-orange-300" }
      ],
      result: "Not found in cache"
    },
    {
      id: 'resolver',
      title: "3. Ask DNS Resolver",
      description: "Contact our ISP's DNS resolver",
      icons: [
        { icon: Laptop, label: "Browser", color: "text-ts-blue-300" },
        { icon: Search, label: "DNS Resolver", color: "text-ts-green-300" }
      ],
      query: "What's the IP for example.com?"
    },
    {
      id: 'root',
      title: "4. Query Root Server",
      description: "Resolver asks root server about .com",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-ts-green-300" },
        { icon: Database, label: "Root Server", color: "text-ts-grey-400" }
      ],
      query: "Who manages .com domains?",
      response: "Here are the .com nameservers"
    },
    {
      id: 'tld',
      title: "5. Query TLD Server",
      description: "Resolver asks .com server about example.com",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-ts-green-300" },
        { icon: Globe, label: ".com Server", color: "text-ts-purple-300" }
      ],
      query: "Who manages example.com?",
      response: "Here are example.com nameservers"
    },
    {
      id: 'auth',
      title: "6. Query Authoritative Server",
      description: "Resolver asks example.com server for IP",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-ts-green-300" },
        { icon: Server, label: "example.com Server", color: "text-ts-orange-300" }
      ],
      query: "What's the IP for example.com?",
      response: "IP is 93.184.216.34"
    },
    {
      id: 'response',
      title: "7. Final Response",
      description: "DNS Resolver returns the IP address",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-ts-green-300" },
        { icon: Laptop, label: "Browser", color: "text-ts-blue-300" }
      ],
      response: "The IP is 93.184.216.34"
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  // Current step data
  const currentStepData = steps[currentStep];

  return (
    <div className="w-full bg-ts-grey-50 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2 text-ts-grey-600">DNS Resolution Process</h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-ts-grey-200 rounded-full mb-3">
        <div
          className="h-full bg-ts-blue-300 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Step Navigator */}
      <div className="flex items-center mb-3 overflow-x-auto pb-2 -mx-1">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`px-2 py-1 mx-1 text-xs rounded whitespace-nowrap flex-shrink-0 transition-colors ${
              index === currentStep
                ? 'bg-ts-blue-300 text-white'
                : index < currentStep
                  ? 'bg-ts-blue-100 text-ts-blue-400'
                  : 'bg-ts-grey-100 text-ts-grey-400'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Current Step Content */}
      <div className="bg-white border border-ts-grey-200 rounded-lg p-3 mb-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-ts-grey-700">{currentStepData.title}</h3>
        </div>

        <p className="text-sm text-ts-grey-500 mb-3">{currentStepData.description}</p>

        {/* Icons Row */}
        <div className="flex items-center justify-center space-x-3 mb-3">
          {currentStepData.icons.map((icon, iconIndex) => {
            const Icon = icon.icon;
            return (
              <React.Fragment key={icon.label}>
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-ts-grey-50 rounded-lg">
                    <Icon className={`${icon.color}`} size={20} />
                  </div>
                  <span className="mt-1 text-xs text-ts-grey-500">{icon.label}</span>
                </div>
                {iconIndex < currentStepData.icons.length - 1 && (
                  <ArrowRight className="text-ts-grey-300" size={16} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Query/Response Section - Compact */}
        {(currentStepData.query || currentStepData.response || currentStepData.result) && (
          <div className="text-xs space-y-1">
            {currentStepData.query && (
              <div className="bg-ts-blue-50 text-ts-blue-400 p-1.5 rounded">
                <span className="font-medium">Query:</span> {currentStepData.query}
              </div>
            )}
            {currentStepData.response && (
              <div className="bg-ts-green-50 text-ts-green-300 p-1.5 rounded">
                <span className="font-medium">Response:</span> {currentStepData.response}
              </div>
            )}
            {currentStepData.result && (
              <div className="bg-ts-orange-50 text-ts-orange-300 p-1.5 rounded">
                <span className="font-medium">Result:</span> {currentStepData.result}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Steps Visualization */}
      <div className="relative h-12 mb-3">
        <div className="absolute inset-0 flex items-center">
          <div className="h-0.5 w-full bg-ts-grey-200"></div>
        </div>
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
              onClick={() => setCurrentStep(index)}
            >
              <div
                className={`w-4 h-4 rounded-full transition-colors cursor-pointer ${
                  index <= currentStep ? 'bg-ts-blue-300' : 'bg-ts-grey-300'
                }`}
              />
              {index === currentStep && (
                <span className="absolute top-5 text-xs font-medium text-ts-grey-500 whitespace-nowrap">
                  Step {index + 1}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Control Button */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className={`px-3 py-1.5 text-sm rounded transition-colors ${
            currentStep === 0
              ? 'bg-ts-grey-200 text-ts-grey-400 cursor-not-allowed'
              : 'bg-ts-grey-200 text-ts-grey-600 hover:bg-ts-grey-300'
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-ts-blue-300 text-white px-3 py-1.5 text-sm rounded hover:bg-ts-blue-400 transition-colors"
        >
          {currentStep === steps.length - 1 ? "Start Over" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default CompactRecursiveResolver;