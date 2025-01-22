import React, { useState } from 'react';
import { Server, Clock, Globe, Search, ArrowRight, Database, Check } from 'lucide-react';

export const DNSExplainer = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
      {
        title: "1. User Request",
        description: "User types www.example.com in browser",
        icon: Globe,
      },
      {
        title: "2. Check Local Cache",
        description: "Browser checks if the DNS record exists in local cache",
        icon: Clock,
      },
      {
        title: "3. DNS Resolver",
        description: "If not in cache, local DNS resolver receives the query",
        icon: Search,
      },
      {
        title: "4. Root Server",
        description: "Asks root server for .com nameservers",
        icon: Database,
      },
      {
        title: "5. TLD Server",
        description: "Asks .com server for example.com nameservers",
        icon: Server,
      },
      {
        title: "6. Authoritative Server",
        description: "Gets IP address from example.com nameserver",
        icon: Check,
      }
    ];

    const handleNext = () => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">DNS Resolution Process</h2>

        {/* Animation Stage */}
        <div className="bg-gray-50 rounded-lg p-8 mb-6 overflow-x-auto">
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
                      isActive ? 'bg-blue-500 text-white' :
                      isPast ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div className="mt-2 text-sm text-center max-w-xs">
                      {isActive && <p className="font-semibold">{step.title}</p>}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className={`transition-all duration-300 ${
                      index < currentStep ? 'text-green-500' : 'text-gray-300'
                    }`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h3>
          <p className="text-gray-600">{steps[currentStep].description}</p>
        </div>

        {/* Control Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Restart" : "Next Step"}
          </button>
        </div>
      </div>
    );
  };

  export default DNSExplainer;