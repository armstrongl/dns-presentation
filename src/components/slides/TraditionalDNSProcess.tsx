import React, { useState } from 'react';
import { Laptop, Server, Search, Globe, Database, Clock, ArrowRight, Check } from 'lucide-react';

export const TraditionalDNSProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Browser needs to find example.com",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        query: "Need to find example.com"
      }
    },
    {
      id: 'cache',
      title: "2. Check Local Cache",
      description: "First, check if we already know the IP address",
      icon: Clock,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        result: "Not found in cache"
      }
    },
    {
      id: 'resolver',
      title: "3. Ask DNS Resolver",
      description: "Contact our ISP's DNS resolver",
      icon: Search,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        query: "What's the IP for example.com?"
      }
    },
    {
      id: 'root',
      title: "4. Query Root Server",
      description: "Resolver asks root server about .com",
      icon: Database,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        query: "Who manages .com domains?",
        response: "Here are the .com nameservers"
      }
    },
    {
      id: 'tld',
      title: "5. Query TLD Server",
      description: "Resolver asks .com server about example.com",
      icon: Globe,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        query: "Who manages example.com?",
        response: "Here are example.com nameservers"
      }
    },
    {
      id: 'auth',
      title: "6. Query Authoritative Server",
      description: "Resolver asks example.com server for IP",
      icon: Server,
      bgColor: "bg-ts-red-50",
      activeColor: "bg-ts-red-300",
      textColor: "text-ts-red-300",
      details: {
        query: "What's the IP for example.com?",
        response: "IP is 93.184.216.34"
      }
    },
    {
      id: 'response',
      title: "7. Final Response",
      description: "DNS Resolver returns the IP address",
      icon: Check,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        response: "The IP is 93.184.216.34"
      }
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  // Current step data
  const currentStepData = steps[currentStep];

  return (
    <div className="w-full mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-8 text-ts-grey-800">
        Traditional DNS Resolution Process
      </h2>

      {/* Small Screen Design */}
      <div className="block sm:hidden">
        {/* Progress indicator */}
        <div className="mb-4 flex justify-between items-center text-sm text-ts-grey-500">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span className="font-medium">{Math.round((currentStep + 1) / steps.length * 100)}% Complete</span>
        </div>

        {/* Mobile Step Visualization */}
        <div className={`${currentStepData.bgColor} rounded-lg p-4 text-center mb-4`}>
          <div className={`inline-block p-4 rounded-full ${currentStepData.activeColor} text-white mb-3`}>
            {React.createElement(currentStepData.icon, { size: 32 })}
          </div>
        </div>

        {/* Mobile Description Box */}
        <div className={`${currentStepData.bgColor} rounded-lg p-4 shadow-sm mb-4 text-center`}>
          <h3 className={`text-lg font-semibold mb-2 ${currentStepData.textColor}`}>
            {currentStepData.title}
          </h3>
          <p className="text-ts-grey-600 text-sm">{currentStepData.description}</p>

          {/* Query/Response Section - Mobile */}
          {(currentStepData.details?.query || currentStepData.details?.response || currentStepData.details?.result) && (
            <div className="mt-3 space-y-2 text-sm max-w-md mx-auto">
              {currentStepData.details?.query && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Query:</span> {currentStepData.details.query}
                </div>
              )}
              {currentStepData.details?.response && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Response:</span> {currentStepData.details.response}
                </div>
              )}
              {currentStepData.details?.result && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Result:</span> {currentStepData.details.result}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Control Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handlePrevious}
            className={`${currentStepData.activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-full`}
          >
            Previous Step
          </button>
          <button
            onClick={handleNext}
            className={`${currentStepData.activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-full`}
          >
            {currentStep === steps.length - 1 ? "Restart" : "Next Step"}
          </button>
        </div>
      </div>

      {/* Large Screen Design */}
      <div className="hidden sm:block">
        {/* Animation Stage */}
        <div className={`${currentStepData.bgColor} rounded-lg p-6 mb-4 overflow-x-auto`}>
          <div className="flex justify-between items-center min-w-max">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isPast = index < currentStep;

              return (
                <React.Fragment key={index}>
                  <div className={`flex flex-col items-center transition-all duration-300 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}>
                    <div className={`p-3 rounded-full ${
                      isActive ? step.activeColor + ' text-white' :
                      isPast ? 'bg-ts-grey-200 text-ts-grey-500' : 'bg-white ' + step.textColor
                    }`}>
                      <Icon size={22} />
                    </div>
                    <div className="mt-2 text-xs text-center max-w-xs">
                      {isActive && (
                        <p className={`font-semibold ${step.textColor}`}>
                          {step.title}
                        </p>
                      )}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className={`transition-all duration-300 ${
                      index < currentStep ? 'text-ts-grey-400' : 'text-ts-grey-300'
                    }`} size={16} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Description Box */}
        <div className={`${currentStepData.bgColor} rounded-lg p-5 shadow-sm mb-4 text-center`}>
          <h3 className={`text-lg font-semibold mb-2 ${currentStepData.textColor}`}>
            {currentStepData.title}
          </h3>
          <p className="text-ts-grey-600 text-sm mb-3">{currentStepData.description}</p>

          {/* Query/Response Section - Desktop */}
          {(currentStepData.details?.query || currentStepData.details?.response || currentStepData.details?.result) && (
            <div className="flex flex-col gap-3 text-sm max-w-2xl mx-auto">
              {currentStepData.details?.query && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Query:</span> {currentStepData.details.query}
                </div>
              )}
              {currentStepData.details?.response && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Response:</span> {currentStepData.details.response}
                </div>
              )}
              {currentStepData.details?.result && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Result:</span> {currentStepData.details.result}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Control Buttons */}
        <div className="text-center space-x-4">
          <button
            onClick={handlePrevious}
            className={`${currentStepData.activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors`}
          >
            Previous Step
          </button>
          <button
            onClick={handleNext}
            className={`${currentStepData.activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors`}
          >
            {currentStep === steps.length - 1 ? "Restart" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraditionalDNSProcess;