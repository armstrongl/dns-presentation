import React, { useState } from 'react';
import { Server, Clock, Globe, Search, ArrowRight, Database, Check } from 'lucide-react';

export const DNSExplainer = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
      {
        title: "1. User Request",
        description: "User types www.example.com in browser",
        icon: Globe,
        bgColor: "bg-blue-50",
        activeColor: "bg-blue-600",
        textColor: "text-blue-600",
      },
      {
        title: "2. Check Local Cache",
        description: "Browser checks if the DNS record exists in local cache",
        icon: Clock,
        bgColor: "bg-green-50",
        activeColor: "bg-green-600",
        textColor: "text-green-600",
      },
      {
        title: "3. DNS Resolver",
        description: "If not in cache, local DNS resolver receives the query",
        icon: Search,
        bgColor: "bg-orange-50",
        activeColor: "bg-orange-600",
        textColor: "text-orange-600",
      },
      {
        title: "4. Root Server",
        description: "Asks root server for .com nameservers",
        icon: Database,
        bgColor: "bg-yellow-50",
        activeColor: "bg-yellow-600",
        textColor: "text-yellow-600",
      },
      {
        title: "5. TLD Server",
        description: "Asks .com server for example.com nameservers",
        icon: Server,
        bgColor: "bg-purple-50",
        activeColor: "bg-purple-600",
        textColor: "text-purple-600",
      },
      {
        title: "6. Authoritative Server",
        description: "Gets IP address from example.com nameserver",
        icon: Check,
        bgColor: "bg-blue-50",
        activeColor: "bg-blue-600",
        textColor: "text-blue-600",
      }
    ];

    const handleNext = () => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    };

    const handlePrevious = () => {
      setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto">
        {/* Small Screen Design */}
        <div className="block sm:hidden">
          {/* Progress indicator */}
          <div className="mb-4 flex justify-between items-center text-sm text-gray-500">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span className="font-medium">{Math.round((currentStep + 1) / steps.length * 100)}% Complete</span>
          </div>

          {/* Mobile Step Visualization */}
          <div className={`${steps[currentStep].bgColor} rounded-lg p-4 text-center mb-6`}>
            <div className={`inline-block p-4 rounded-full ${steps[currentStep].activeColor} text-white mb-3`}>
              {React.createElement(steps[currentStep].icon, { size: 32 })}
            </div>
          </div>

          {/* Mobile Description Box */}
          <div className={`${steps[currentStep].bgColor} rounded-lg p-4 shadow-lg mb-6`}>
            <h3 className={`text-lg font-semibold mb-2 ${steps[currentStep].textColor}`}>
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-600 text-sm">{steps[currentStep].description}</p>
          </div>

          {/* Mobile Control Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handlePrevious}
              className={`${steps[currentStep].activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-full`}
            >
              Previous Step
            </button>
            <button
              onClick={handleNext}
              className={`${steps[currentStep].activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-full`}
            >
              {currentStep === steps.length - 1 ? "Restart" : "Next Step"}
            </button>
          </div>
        </div>

        {/* Large Screen Design */}
        <div className="hidden sm:block">
          {/* Animation Stage */}
          <div className={`${steps[currentStep].bgColor} rounded-lg p-8 mb-6 overflow-x-auto`}>
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
                      <div className={`p-4 rounded-full ${
                        isActive ? step.activeColor + ' text-white' :
                        isPast ? 'bg-gray-200 text-gray-500' : 'bg-white ' + step.textColor
                      }`}>
                        <Icon size={24} />
                      </div>
                      <div className="mt-2 text-sm text-center max-w-xs">
                        {isActive && (
                          <p className={`font-semibold ${step.textColor}`}>
                            {step.title}
                          </p>
                        )}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className={`transition-all duration-300 ${
                        index < currentStep ? 'text-gray-400' : 'text-gray-300'
                      }`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Description Box */}
          <div className={`${steps[currentStep].bgColor} rounded-lg p-6 shadow-lg mb-6`}>
            <h3 className={`text-xl font-semibold mb-2 ${steps[currentStep].textColor}`}>
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-600">{steps[currentStep].description}</p>
          </div>

          {/* Control Buttons */}
          <div className="text-center space-x-4">
            <button
              onClick={handlePrevious}
              className={`${steps[currentStep].activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors`}
            >
              Previous Step
            </button>
            <button
              onClick={handleNext}
              className={`${steps[currentStep].activeColor} text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors`}
            >
              {currentStep === steps.length - 1 ? "Restart" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    );
  };

export default DNSExplainer;