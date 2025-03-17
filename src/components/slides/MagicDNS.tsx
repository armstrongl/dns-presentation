import React, { useState } from 'react';
import { Laptop, Database, ArrowRight, Check, Smartphone, RefreshCw, Upload, LucideIcon } from 'lucide-react';

interface StepDetails {
  description?: string;
  action?: string;
  result?: string;
  deviceName?: string;
  hostname?: string;
  dnsName?: string;
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

export const MagicDNSProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scenarioType, setScenarioType] = useState('new-device'); // 'new-device', 'name-update', or 'conflict'

  // Steps for new device joining tailnet
  const newDeviceSteps: Step[] = [
    {
      id: 'device-joins',
      title: "1. Device Joins Tailnet",
      description: "A new laptop connects to your tailnet",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        action: "Device authenticates and establishes WireGuard connections",
        hostname: "macbook-pro",
        deviceName: "Jane's MacBook Pro"
      }
    },
    {
      id: 'name-generation',
      title: "2. DNS Name Generation",
      description: "Tailscale generates a DNS name based on the device name",
      icon: Database,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        action: "Convert device name to DNS-safe format",
        result: "Device name transformed to DNS name",
        dnsName: "janes-macbook-pro.example-tailnet.ts.net"
      }
    },
    {
      id: 'dns-update',
      title: "3. DNS Record Creation",
      description: "DNS record created in Tailscale's control server",
      icon: Upload,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        action: "Create new record mapping DNS name to Tailscale IP",
        result: "DNS record created and ready to propagate",
        dnsName: "janes-macbook-pro.example-tailnet.ts.net",
      }
    },
    {
      id: 'push-updates',
      title: "4. Push Updates to All Devices",
      description: "Tailscale control server pushes DNS update to all tailnet devices",
      icon: RefreshCw,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        action: "Secure updates sent to each device's Quad100 resolver",
        result: "All devices receive the update simultaneously"
      }
    },
    {
      id: 'instant-resolution',
      title: "5. Instant Name Resolution",
      description: "All devices can immediately resolve the new device by name",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        action: "Other devices can now reach the new device by name",
        result: "No propagation delay or TTL waiting required",
        dnsName: "janes-macbook-pro.example-tailnet.ts.net"
      }
    }
  ];

  // Steps for device name update
  const nameUpdateSteps: Step[] = [
    {
      id: 'name-change',
      title: "1. Device Name Change",
      description: "User renames a device in Tailscale",
      icon: Laptop,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        action: "Device name changed via admin console or local settings",
        hostname: "work-laptop (original)",
        deviceName: "Engineering Laptop (new name)"
      }
    },
    {
      id: 'name-update',
      title: "2. DNS Name Update",
      description: "Tailscale generates a new DNS name based on the updated device name",
      icon: Database,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        action: "Transform new device name to DNS-safe format",
        result: "Updated DNS name generated",
        dnsName: "engineering-laptop.example-tailnet.ts.net"
      }
    },
    {
      id: 'record-update',
      title: "3. DNS Record Update",
      description: "DNS record updated in Tailscale's control server",
      icon: Upload,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        action: "Update existing record with new DNS name",
        result: "Old name removed, new name mapped to same Tailscale IP"
      }
    },
    {
      id: 'push-updates',
      title: "4. Push Updates to All Devices",
      description: "Updates pushed immediately to all tailnet devices",
      icon: RefreshCw,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        action: "Secure updates sent over WireGuard connections",
        result: "All devices' local DNS resolvers updated instantly"
      }
    },
    {
      id: 'immediate-effect',
      title: "5. Immediate Effect",
      description: "New name becomes instantly available across the tailnet",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        action: "Old hostname stops resolving, new hostname starts resolving",
        result: "No DNS caching or propagation delay"
      }
    }
  ];

  // Steps for name conflict resolution
  const conflictResolutionSteps: Step[] = [
    {
      id: 'conflict-detection',
      title: "1. Name Conflict Detection",
      description: "Two devices claim the same hostname on your tailnet",
      icon: Smartphone,
      bgColor: "bg-ts-blue-50",
      activeColor: "bg-ts-blue-300",
      textColor: "text-ts-blue-300",
      details: {
        action: "Second device connects with same name as existing device",
        hostname: "desktop",
        deviceName: "Desktop"
      }
    },
    {
      id: 'existing-name',
      title: "2. Existing Name Identification",
      description: "Tailscale detects the name is already in use",
      icon: Database,
      bgColor: "bg-ts-purple-50",
      activeColor: "bg-ts-purple-300",
      textColor: "text-ts-purple-300",
      details: {
        action: "Check if 'desktop' name already exists",
        result: "Found existing device using 'desktop' name"
      }
    },
    {
      id: 'suffix-addition',
      title: "3. Numeric Suffix Generation",
      description: "Tailscale adds a numeric suffix to ensure uniqueness",
      icon: Upload,
      bgColor: "bg-ts-red-50",
      activeColor: "bg-ts-red-300",
      textColor: "text-ts-red-300",
      details: {
        action: "Append '-2' suffix to create unique name",
        result: "New DNS name becomes 'desktop-2'",
        dnsName: "desktop-2.example-tailnet.ts.net"
      }
    },
    {
      id: 'push-updates',
      title: "4. Push Updates to All Devices",
      description: "Both names (original and suffixed) pushed to all devices",
      icon: RefreshCw,
      bgColor: "bg-ts-orange-50",
      activeColor: "bg-ts-orange-300",
      textColor: "text-ts-orange-300",
      details: {
        action: "Update all Quad100 resolvers with both mappings",
        result: "All devices can resolve both 'desktop' and 'desktop-2'"
      }
    },
    {
      id: 'both-available',
      title: "5. Both Names Available",
      description: "Both devices accessible by their respective DNS names",
      icon: Check,
      bgColor: "bg-ts-green-50",
      activeColor: "bg-ts-green-300",
      textColor: "text-ts-green-300",
      details: {
        action: "First device keeps original name, second gets suffixed name",
        result: "No disruption to existing connections while ensuring uniqueness"
      }
    }
  ];

  // Select the appropriate steps based on the scenario type
  const steps =
    scenarioType === 'new-device' ? newDeviceSteps :
    scenarioType === 'name-update' ? nameUpdateSteps :
    conflictResolutionSteps;

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  // Current step data
  const currentStepData = steps[currentStep];

  // Helper function to get button style based on active state
  const getButtonStyle = (type: string) => {
    if (type === scenarioType) {
      switch (type) {
        case 'new-device':
          return 'bg-ts-blue-300 text-white';
        case 'name-update':
          return 'bg-ts-green-300 text-white';
        case 'conflict':
          return 'bg-ts-red-300 text-white';
      }
    }

    switch (type) {
      case 'new-device':
        return 'bg-ts-blue-50 text-ts-blue-300 hover:bg-ts-blue-100';
      case 'name-update':
        return 'bg-ts-green-50 text-ts-green-300 hover:bg-ts-green-100';
      case 'conflict':
        return 'bg-ts-red-50 text-ts-red-300 hover:bg-ts-red-100';
    }
  };

  return (
    <div className="w-full mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-4 text-ts-grey-800">
        MagicDNS: Automatic Name Resolution
      </h2>

      {/* Scenario Type Selection Buttons */}
      <div className="flex flex-wrap justify-center items-center mb-8 gap-3">
        <button
          onClick={() => {
            setScenarioType('new-device');
            setCurrentStep(0);
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${getButtonStyle('new-device')}`}
        >
          New Device Joins
        </button>
        <button
          onClick={() => {
            setScenarioType('name-update');
            setCurrentStep(0);
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${getButtonStyle('name-update')}`}
        >
          Device Renamed
        </button>
        <button
          onClick={() => {
            setScenarioType('conflict');
            setCurrentStep(0);
          }}
          className={`px-4 py-2 rounded-lg transition-colors ${getButtonStyle('conflict')}`}
        >
          Name Conflict
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

          {/* Details Section - Mobile */}
          {currentStepData.details && (
            <div className="mt-3 space-y-2 text-sm max-w-md mx-auto">
              {currentStepData.details.action && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-left">
                  <span className="font-medium">Action:</span> {currentStepData.details.action}
                </div>
              )}
              {currentStepData.details.result && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-left">
                  <span className="font-medium">Result:</span> {currentStepData.details.result}
                </div>
              )}
              {currentStepData.details.hostname && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-left">
                  <span className="font-medium">Hostname:</span> {currentStepData.details.hostname}
                </div>
              )}
              {currentStepData.details.deviceName && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-left">
                  <span className="font-medium">Device Name:</span> {currentStepData.details.deviceName}
                </div>
              )}
              {currentStepData.details.dnsName && (
                <div className="bg-white bg-opacity-50 p-2 rounded text-left">
                  <span className="font-medium">DNS Name:</span> {currentStepData.details.dnsName}
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

          {/* Details Section - Desktop */}
          {currentStepData.details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm max-w-3xl mx-auto">
              {currentStepData.details.action && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-left">
                  <span className="font-medium">Action:</span> {currentStepData.details.action}
                </div>
              )}
              {currentStepData.details.result && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-left">
                  <span className="font-medium">Result:</span> {currentStepData.details.result}
                </div>
              )}
              {currentStepData.details.hostname && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-left">
                  <span className="font-medium">Hostname:</span> {currentStepData.details.hostname}
                </div>
              )}
              {currentStepData.details.deviceName && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-left">
                  <span className="font-medium">Device Name:</span> {currentStepData.details.deviceName}
                </div>
              )}
              {currentStepData.details.dnsName && (
                <div className="bg-white bg-opacity-50 p-3 rounded text-left">
                  <span className="font-medium">DNS Name:</span> {currentStepData.details.dnsName}
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
        <h3 className="text-lg font-semibold mb-2 text-ts-grey-700">MagicDNS Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-lg border border-ts-grey-200">
            <h4 className="font-medium text-ts-blue-400 mb-1">Automatic Names</h4>
            <p className="text-ts-grey-600 text-sm">
              Every device gets a DNS name based on its device name, formatted as hostname.tailnet-name.ts.net.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-ts-grey-200">
            <h4 className="font-medium text-ts-green-400 mb-1">Instant Updates</h4>
            <p className="text-ts-grey-600 text-sm">
              Name changes propagate instantly to all devices—no TTLs or waiting for caches to expire.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-ts-grey-200">
            <h4 className="font-medium text-ts-purple-400 mb-1">Conflict Resolution</h4>
            <p className="text-ts-grey-600 text-sm">
              Name conflicts are automatically handled by adding numeric suffixes like &quot;-2&quot; to ensure uniqueness.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-ts-grey-200">
            <h4 className="font-medium text-ts-orange-400 mb-1">Zero Configuration</h4>
            <p className="text-ts-grey-600 text-sm">
              Fully automatic with no manual DNS configuration or record management needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicDNSProcess;