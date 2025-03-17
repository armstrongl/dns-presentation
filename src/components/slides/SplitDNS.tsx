import React, { useState } from 'react';
import { Laptop, Server, Globe, Database, ArrowRight, Check, Filter, LucideIcon, Building } from 'lucide-react';

interface StepDetails {
  query?: string;
  result?: string;
  response?: string;
  process?: string;
  rule?: string;
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

export const SplitDNSProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [queryType, setQueryType] = useState('corporate'); // 'corporate' or 'public'

  // Steps for Corporate domain resolution via Split DNS
  const corporateSteps: Step[] = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Application needs to access internal.corp.example.com",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        query: "What's the IP for internal.corp.example.com?"
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
        query: "Need to resolve internal.corp.example.com"
      }
    },
    {
      id: 'rule-check',
      title: "3. Split DNS Rule Check",
      description: "Quad100 checks if any Split DNS rules match the domain",
      icon: Filter,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        rule: "Rule found: *.corp.example.com → Corporate DNS (10.0.0.53)"
      }
    },
    {
      id: 'corporate-resolver',
      title: "4. Corporate DNS Resolution",
      description: "Query forwarded to corporate DNS resolver",
      icon: Building,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        process: "Corporate resolver handles the query for internal domain"
      }
    },
    {
      id: 'response',
      title: "5. Response from Corporate DNS",
      description: "IP address returns via Quad100 to application",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        response: "Internal IP address: 10.10.5.12"
      }
    }
  ];

  // Steps for public domain resolution with Split DNS
  const publicSteps: Step[] = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Application needs to access api.weather.com",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        query: "What's the IP for api.weather.com?"
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
        query: "Need to resolve api.weather.com"
      }
    },
    {
      id: 'rule-check',
      title: "3. Split DNS Rule Check",
      description: "Quad100 checks if any Split DNS rules match the domain",
      icon: Filter,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        rule: "No specific rule for api.weather.com, use default resolver"
      }
    },
    {
      id: 'default-resolver',
      title: "4. Default Resolver",
      description: "Query forwarded to configured default resolver",
      icon: Globe,
      bgColor: "bg-ts-red-50",
      activeColor: "bg-ts-red-300",
      textColor: "text-ts-red-300",
      details: {
        process: "Google DNS (8.8.8.8) handles the public domain query"
      }
    },
    {
      id: 'doh-upgrade',
      title: "5. DoH Upgrade",
      description: "For supported resolvers, query upgraded to DNS-over-HTTPS",
      icon: Server,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        process: "Secure DNS resolution via HTTPS for privacy"
      }
    },
    {
      id: 'response',
      title: "6. Response Delivery",
      description: "Public IP address returns via Quad100 to application",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        response: "Public IP address: 203.0.113.42"
      }
    }
  ];

  // Select the appropriate steps based on the query type
  const steps = queryType === 'corporate' ? corporateSteps : publicSteps;

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
        Split DNS: Domain-Specific Resolution
      </h2>

      {/* Query Type Selection Buttons */}
      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={() => {
            setQueryType('corporate');
            setCurrentStep(0);
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${
            queryType === 'corporate'
              ? 'bg-ts-purple-300 text-white'
              : 'bg-ts-purple-50 text-ts-purple-300 hover:bg-ts-purple-100'
          }`}
        >
          Corporate Domain
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
          Public Domain
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
          {(currentStepData.details?.query || currentStepData.details?.response || currentStepData.details?.result || currentStepData.details?.process || currentStepData.details?.rule) && (
            <div className="mt-3 space-y-2 text-sm max-w-md mx-auto">
              {currentStepData.details?.query && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Query:</span> {currentStepData.details.query}
                </div>
              )}
              {currentStepData.details?.rule && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Rule Match:</span> {currentStepData.details.rule}
                </div>
              )}
              {currentStepData.details?.process && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-center">
                  <span className="font-medium">Process:</span> {currentStepData.details.process}
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
          {(currentStepData.details?.query || currentStepData.details?.response || currentStepData.details?.result || currentStepData.details?.process || currentStepData.details?.rule) && (
            <div className="flex flex-col gap-3 text-sm max-w-2xl mx-auto">
              {currentStepData.details?.query && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Query:</span> {currentStepData.details.query}
                </div>
              )}
              {currentStepData.details?.rule && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Rule Match:</span> {currentStepData.details.rule}
                </div>
              )}
              {currentStepData.details?.process && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-center">
                  <span className="font-medium">Process:</span> {currentStepData.details.process}
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

      {/* Additional Information Box */}
      <div className="mt-8 bg-ts-grey-50 p-4 rounded-lg border border-ts-grey-200">
        <h3 className="text-lg font-semibold mb-2 text-ts-grey-700">Split DNS Configuration</h3>
        <p className="text-ts-grey-600 text-sm mb-4">
          Split DNS lets you customize how different domains are resolved. Configure it in the Tailscale admin console with rules like:
        </p>
        <div className="bg-white p-3 rounded-lg border border-ts-grey-200 font-mono text-sm">
          <p className="mb-1">• *.corp.example.com → Corporate DNS (10.0.0.53)</p>
          <p className="mb-1">• *.internal.company → VPN DNS (172.16.1.53)</p>
          <p>• * → Public DNS (8.8.8.8, 1.1.1.1)</p>
        </div>
      </div>
    </div>
  );
};

export default SplitDNSProcess;