import React, { useState } from 'react';
import { Laptop, Network, Search, Server, ArrowRight, Globe, Check } from 'lucide-react';

export const MagicDNSExplainer = () => {
    const [queryType, setQueryType] = useState('tailscale');
    const [currentStep, setCurrentStep] = useState(0);

    const tailscaleSteps = [
      {
        title: "1. Device Query",
        description: "User attempts to access 'plex-server' on a Tailscale-enabled device",
        icon: Laptop,
        bgColor: "bg-ts-blue-50",
        activeColor: "bg-ts-blue-300",
        textColor: "text-ts-blue-300",
      },
      {
        title: "2. Local Tailscale DNS",
        description: "Query goes to local Tailscale DNS server (100.100.100.100)",
        icon: Server,
        bgColor: "bg-ts-green-50",
        activeColor: "bg-ts-green-300",
        textColor: "text-ts-green-300",
      },
      {
        title: "3. Tailnet Check",
        description: "Tailscale DNS checks if 'plex-server' is a device in your Tailnet",
        icon: Search,
        bgColor: "bg-ts-purple-50",
        activeColor: "bg-ts-purple-300",
        textColor: "text-ts-purple-300",
      },
      {
        title: "4. Local Resolution",
        description: "Converts 'plex-server' to its Tailscale IP (100.100.100.123) and resolves locally",
        icon: Check,
        bgColor: "bg-ts-orange-50",
        activeColor: "bg-ts-orange-300",
        textColor: "text-ts-orange-300",
      }
    ];

    const regularSteps = [
      {
        title: "1. Device Query",
        description: "User attempts to access 'wikipedia.com' on a Tailscale-enabled device",
        icon: Laptop,
        bgColor: "bg-ts-blue-50",
        activeColor: "bg-ts-blue-300",
        textColor: "text-ts-blue-300",
      },
      {
        title: "2. Local Tailscale DNS",
        description: "Query goes to local Tailscale DNS server (100.100.100.100)",
        icon: Server,
        bgColor: "bg-ts-green-50",
        activeColor: "bg-ts-green-300",
        textColor: "text-ts-green-300",
      },
      {
        title: "3. Tailnet Check",
        description: "Tailscale DNS checks if 'wikipedia.com' is a device in your Tailnet",
        icon: Search,
        bgColor: "bg-ts-purple-50",
        activeColor: "bg-ts-purple-300",
        textColor: "text-ts-purple-300",
      },
      {
        title: "4. DNS Forwarding",
        description: "Not a Tailnet device - forwards request to local DNS resolver (e.g., 8.8.8.8)",
        icon: Network,
        bgColor: "bg-ts-orange-50",
        activeColor: "bg-ts-orange-300",
        textColor: "text-ts-orange-300",
      }
    ];

    const steps = queryType === 'tailscale' ? tailscaleSteps : regularSteps;

    const handleNext = () => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    };

    const handlePrevious = () => {
      setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto">
        {/* Query Type Selector */}
        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={() => { setQueryType('tailscale'); setCurrentStep(0); }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              queryType === 'tailscale'
                ? 'bg-ts-blue-300 text-white'
                : 'bg-ts-grey-100 text-ts-grey-400 hover:bg-ts-grey-200'
            }`}
          >
            Tailscale Device Query
          </button>
          <button
            onClick={() => { setQueryType('regular'); setCurrentStep(0); }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              queryType === 'regular'
                ? 'bg-ts-blue-300 text-white'
                : 'bg-ts-grey-100 text-ts-grey-400 hover:bg-ts-grey-200'
            }`}
          >
            Regular DNS Query
          </button>
        </div>

        {/* Small Screen Design */}
        <div className="block sm:hidden">
          {/* Progress indicator */}
          <div className="mb-4 flex justify-between items-center text-sm text-ts-grey-400">
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
            <p className="text-ts-grey-400 text-sm">{steps[currentStep].description}</p>
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
                        isPast ? 'bg-ts-grey-200 text-ts-grey-400' : 'bg-white ' + step.textColor
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
                        index < currentStep ? 'text-ts-grey-300' : 'text-ts-grey-100'
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
            <p className="text-ts-grey-400">{steps[currentStep].description}</p>
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

export default MagicDNSExplainer;