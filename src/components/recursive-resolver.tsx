import React, { useState } from 'react';
import { Laptop, Server, Search, Globe, Database, Clock, ArrowRight } from 'lucide-react';

export const RecursiveResolver = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'initial',
      title: "1. Initial Request",
      description: "Browser needs to find example.com",
      icons: [
        { icon: Laptop, label: "Browser", color: "text-blue-500" }
      ]
    },
    {
      id: 'cache',
      title: "2. Check Local Cache",
      description: "First, check if we already know the IP address",
      icons: [
        { icon: Laptop, label: "Browser", color: "text-blue-500" },
        { icon: Clock, label: "Local Cache", color: "text-amber-500" }
      ],
      result: "Not found in cache"
    },
    {
      id: 'resolver',
      title: "3. Ask DNS Resolver",
      description: "Contact our ISP's DNS resolver",
      icons: [
        { icon: Laptop, label: "Browser", color: "text-blue-500" },
        { icon: Search, label: "DNS Resolver", color: "text-green-500" }
      ],
      query: "What's the IP for example.com?"
    },
    {
      id: 'root',
      title: "4. Query Root Server",
      description: "Resolver asks root server about .com",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-green-500" },
        { icon: Database, label: "Root Server", color: "text-gray-500" }
      ],
      query: "Who manages .com domains?",
      response: "Here are the .com nameservers"
    },
    {
      id: 'tld',
      title: "5. Query TLD Server",
      description: "Resolver asks .com server about example.com",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-green-500" },
        { icon: Globe, label: ".com Server", color: "text-purple-500" }
      ],
      query: "Who manages example.com?",
      response: "Here are example.com nameservers"
    },
    {
      id: 'auth',
      title: "6. Query Authoritative Server",
      description: "Resolver asks example.com server for IP",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-green-500" },
        { icon: Server, label: "example.com Server", color: "text-orange-500" }
      ],
      query: "What's the IP for example.com?",
      response: "IP is 93.184.216.34"
    },
    {
      id: 'response',
      title: "7. Final Response",
      description: "DNS Resolver returns the IP address",
      icons: [
        { icon: Search, label: "DNS Resolver", color: "text-green-500" },
        { icon: Laptop, label: "Browser", color: "text-blue-500" }
      ],
      response: "The IP is 93.184.216.34"
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">DNS Resolution Process</h2>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isVisible = index <= currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={step.id}
              className={`transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
              }`}
            >
              <div className={`p-6 rounded-lg border-2 transition-colors ${
                isActive ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
              }`}>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'
                  }`}>
                    Step {index + 1}/{steps.length}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Icons and Communication */}
                <div className="flex items-center justify-center gap-6 my-4">
                  {step.icons.map((icon, iconIndex) => {
                    const Icon = icon.icon;
                    return (
                      <React.Fragment key={icon.label}>
                        <div className="flex flex-col items-center">
                          <div className="p-3 bg-white rounded-lg shadow-sm">
                            <Icon className={`${icon.color}`} size={24} />
                          </div>
                          <span className="mt-2 text-sm font-medium">{icon.label}</span>
                        </div>
                        {iconIndex < step.icons.length - 1 && (
                          <ArrowRight className="text-gray-400" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Query/Response Section */}
                {(step.query || step.response || step.result) && (
                  <div className="mt-4 space-y-2">
                    {step.query && (
                      <div className="bg-blue-100 text-blue-800 p-2 rounded text-sm">
                        Query: {step.query}
                      </div>
                    )}
                    {step.response && (
                      <div className="bg-green-100 text-green-800 p-2 rounded text-sm">
                        Response: {step.response}
                      </div>
                    )}
                    {step.result && (
                      <div className="bg-amber-100 text-amber-800 p-2 rounded text-sm">
                        Result: {step.result}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {currentStep === steps.length - 1 ? "Start Over" : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default RecursiveResolver;