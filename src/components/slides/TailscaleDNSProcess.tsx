import React, { useState } from 'react';
import { Laptop, Server, Network, Globe, Database, ArrowRight, Check, Cloud, LucideIcon } from 'lucide-react';

interface StepDetails {
  query?: string;
  result?: string;
  response?: string;
  process?: string;
}

interface Step {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  activeColor: string;
  textColor: string;
  details?: StepDetails;
}

export const TailscaleDNSProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [queryType, setQueryType] = useState('tailnet'); // 'tailnet' or 'public'

  // Steps for Tailnet domain resolution
  const tailnetSteps: Step[] = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Browser needs to find laptop.tailnet.ts.net",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        query: "Need to reach laptop.tailnet.ts.net"
      }
    },
    {
      id: 'quad100',
      title: "2. Quad100 Resolver",
      description: "Request goes to local Quad100 resolver at 100.100.100.100",
      icon: Database,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        query: "What's the IP for laptop.tailnet.ts.net?"
      }
    },
    {
      id: 'tailnet-check',
      title: "3. Tailnet Domain Check",
      description: "Quad100 recognizes this is a tailnet domain",
      icon: Network,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        result: "This is a tailnet name - we have local data"
      }
    },
    {
      id: 'local-resolution',
      title: "4. Local Resolution",
      description: "Quad100 immediately resolves using locally stored data",
      icon: Cloud,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        result: "Found laptop's Tailscale IP: 100.x.y.z"
      }
    },
    {
      id: 'response',
      title: "5. Immediate Response",
      description: "IP address returned instantly to application",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        response: "The Tailscale IP is 100.x.y.z"
      }
    }
  ];

  // Steps for public domain resolution
  const publicSteps: Step[] = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Browser needs to find example.com",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        query: "Need to reach example.com"
      }
    },
    {
      id: 'quad100',
      title: "2. Quad100 Resolver",
      description: "Request goes to local Quad100 resolver at 100.100.100.100",
      icon: Database,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        query: "What's the IP for example.com?"
      }
    },
    {
      id: 'not-tailnet',
      title: "3. External Domain Check",
      description: "Quad100 recognizes this is not a tailnet domain",
      icon: Globe,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        result: "This is not a tailnet name; need external resolution"
      }
    },
    {
      id: 'doh-upgrade',
      title: "4. DoH Upgrade",
      description: "For supported resolvers like Cloudflare and Google DNS, Tailscale upgrades to DNS-over-HTTPS",
      icon: Cloud,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        process: "Forward query to configured DNS resolver"
      }
    },
    {
      id: 'external-resolution',
      title: "5. External Resolution",
      description: "Configured DNS resolver performs standard resolution",
      icon: Server,
      bgColor: "bg-ts-red-50",
      activeColor: "bg-ts-red-300",
      textColor: "text-ts-red-300",
      details: {
        process: "Standard recursive DNS resolution occurs"
      }
    },
    {
      id: 'response',
      title: "6. Response Delivery",
      description: "IP address returned to application through Quad100",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        response: "The IP address is 93.184.216.34"
      }
    }
  ];

  // Select the appropriate steps based on the query type
  const steps = queryType === 'tailnet' ? tailnetSteps : publicSteps;

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
      <h2 className="text-2xl font-bold text-center mb-4 text-ts-grey-800">
        Tailscale DNS Resolution Process
      </h2>

      {/* Query Type Selection Buttons */}
      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={() => {
            setQueryType('tailnet');
            setCurrentStep(0);
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            queryType === 'tailnet'
              ? 'bg-ts-green-300 text-white'
              : 'bg-ts-green-50 text-ts-green-300 hover:bg-ts-green-100'
          }`}
        >
          Tailnet Device
        </button>
        <button
          onClick={() => {
            setQueryType('public');
            setCurrentStep(0);
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            queryType === 'public'
              ? 'bg-ts-orange-300 text-white'
              : 'bg-ts-orange-50 text-ts-orange-300 hover:bg-ts-orange-100'
          }`}
        >
          Public Website
        </button>
      </div>

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
          {(currentStepData.details?.query || currentStepData.details?.response || currentStepData.details?.result || currentStepData.details?.process) && (
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
              {currentStepData.details?.process && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Process:</span> {currentStepData.details.process}
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
          {(currentStepData.details?.query || currentStepData.details?.response || currentStepData.details?.result || currentStepData.details?.process) && (
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
              {currentStepData.details?.process && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Process:</span> {currentStepData.details.process}
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

export default TailscaleDNSProcess;