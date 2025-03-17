import React, { useState } from 'react';
import { Laptop, Server, Search, Globe, ArrowRight, Clock, Shield, Zap, RefreshCw, LucideIcon } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

// Simple icon components
const DeviceIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <div className={`p-2 sm:p-3 rounded-lg bg-white border border-ts-grey-200 ${className}`}>
    <Laptop size={size} />
  </div>
);

const ServerIcon: React.FC<IconProps> = ({ className, size = 24 }) => (
  <div className={`p-1.5 sm:p-2 rounded-lg bg-white border border-ts-grey-200 ${className}`}>
    <Server size={size} />
  </div>
);

const DNSComparison = () => {
  const [selectedFeature, setSelectedFeature] = useState('updates');

  // Define comparison features
  const features = [
    {
      id: 'updates',
      title: 'Update Mechanism',
      traditional: {
        title: 'Pull-based Updates',
        description: 'Changes propagate slowly based on TTL expiration',
        icon: RefreshCw,
        color: 'ts-orange'
      },
      tailscale: {
        title: 'Push-based Updates',
        description: 'Instant updates pushed to every device in real-time',
        icon: Zap,
        color: 'ts-green'
      }
    },
    {
      id: 'caching',
      title: 'Cache Management',
      traditional: {
        title: 'Complex TTL-based Caching',
        description: 'Relies on time-to-live values with potential staleness',
        icon: Clock,
        color: 'ts-orange'
      },
      tailscale: {
        title: 'No TTL for Tailnet Names',
        description: 'Always fresh and accurate with no expiry times',
        icon: Zap,
        color: 'ts-green'
      }
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      traditional: {
        title: 'Unencrypted by Default',
        description: 'Queries can be intercepted, monitored, or manipulated',
        icon: Globe,
        color: 'ts-red'
      },
      tailscale: {
        title: 'Secure by Design',
        description: 'Local-first resolution with DoH upgrade for external queries',
        icon: Shield,
        color: 'ts-green'
      }
    },
    {
      id: 'resolution',
      title: 'Resolution Process',
      traditional: {
        title: 'Recursive Resolution',
        description: 'Multiple server hops for every new domain lookup',
        icon: Search,
        color: 'ts-orange'
      },
      tailscale: {
        title: 'Local-first Resolution',
        description: 'Immediate answers for tailnet names via Quad100',
        icon: Laptop,
        color: 'ts-green'
      }
    }
  ];

  // Get the currently selected feature data
  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  // Animation helpers
  const TraditionalIcon = selectedFeatureData?.traditional.icon;
  const TailscaleIcon = selectedFeatureData?.tailscale.icon;
  const traditionalColor = selectedFeatureData?.traditional.color || 'ts-orange';
  const tailscaleColor = selectedFeatureData?.tailscale.color || 'ts-green';

  return (
    <div className="w-full mx-auto">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-ts-grey-900">
          Traditional DNS vs Tailscale DNS
        </h2>
        <p className="mt-2 text-sm sm:text-base text-ts-grey-500">
          A comprehensive comparison of DNS resolution approaches
        </p>
      </div>

      {/* Feature selector pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setSelectedFeature(feature.id)}
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              selectedFeature === feature.id
                ? 'bg-ts-blue-300 text-white'
                : 'bg-ts-grey-100 text-ts-grey-500 hover:bg-ts-grey-200'
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Comparison visualization - mobile accordion, desktop grid */}
      <div className="block md:hidden">
        {/* Mobile view - Accordion style */}
        <div className="bg-ts-orange-50 rounded-lg p-4 mb-3 relative">
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-ts-orange-300 text-white text-xs font-medium rounded-full">
            Traditional
          </div>

          <div className="h-32 flex items-center justify-center mt-4">
            <DNSAnimationTraditional
              icon={TraditionalIcon}
              color={traditionalColor}
              featureId={selectedFeature}
            />
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-semibold text-ts-orange-400">
              {selectedFeatureData?.traditional.title}
            </h3>
            <p className="text-xs text-ts-grey-500 mt-1">
              {selectedFeatureData?.traditional.description}
            </p>
          </div>
        </div>

        <div className="bg-ts-green-50 rounded-lg p-4 mb-4 relative">
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-ts-green-300 text-white text-xs font-medium rounded-full">
            Tailscale
          </div>

          <div className="h-32 flex items-center justify-center mt-4">
            <DNSAnimationTailscale
              icon={TailscaleIcon}
              color={tailscaleColor}
              featureId={selectedFeature}
            />
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-semibold text-ts-green-400">
              {selectedFeatureData?.tailscale.title}
            </h3>
            <p className="text-xs text-ts-grey-500 mt-1">
              {selectedFeatureData?.tailscale.description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop view - Side by side */}
      <div className="hidden md:grid grid-cols-2 gap-4 mb-6">
        {/* Traditional DNS side */}
        <div className="bg-ts-orange-50 rounded-lg p-6 relative">
          <div className="absolute top-3 left-3 px-3 py-1 bg-ts-orange-300 text-white text-xs font-medium rounded-full">
            Traditional DNS
          </div>

          <div className="h-48 flex items-center justify-center">
            <DNSAnimationTraditional
              icon={TraditionalIcon}
              color={traditionalColor}
              featureId={selectedFeature}
            />
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-ts-orange-400">
              {selectedFeatureData?.traditional.title}
            </h3>
            <p className="text-ts-grey-500 mt-2">
              {selectedFeatureData?.traditional.description}
            </p>
          </div>
        </div>

        {/* Tailscale DNS side */}
        <div className="bg-ts-green-50 rounded-lg p-6 relative">
          <div className="absolute top-3 left-3 px-3 py-1 bg-ts-green-300 text-white text-xs font-medium rounded-full">
            Tailscale DNS
          </div>

          <div className="h-48 flex items-center justify-center">
            <DNSAnimationTailscale
              icon={TailscaleIcon}
              color={tailscaleColor}
              featureId={selectedFeature}
            />
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-ts-green-400">
              {selectedFeatureData?.tailscale.title}
            </h3>
            <p className="text-ts-grey-500 mt-2">
              {selectedFeatureData?.tailscale.description}
            </p>
          </div>
        </div>
      </div>

      {/* Summary comparison table - Responsive */}
      <div className="overflow-x-auto rounded-lg border border-ts-grey-100">
        <table className="w-full border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-ts-grey-100">
              <th className="p-2 sm:p-3 text-left text-ts-grey-600 font-medium">Feature</th>
              <th className="p-2 sm:p-3 text-left text-ts-orange-400 font-medium">Traditional</th>
              <th className="p-2 sm:p-3 text-left text-ts-green-400 font-medium">Tailscale</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.id} className="border-b border-ts-grey-100">
                <td className="p-2 sm:p-3 font-medium text-ts-grey-500">{feature.title}</td>
                <td className="p-2 sm:p-3 text-ts-grey-400">{feature.traditional.title}</td>
                <td className="p-2 sm:p-3 text-ts-grey-400">{feature.tailscale.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface AnimationProps {
  icon?: LucideIcon;
  color: string;
  featureId: string;
}

const DNSAnimationTraditional: React.FC<AnimationProps> = ({ icon: Icon, color, featureId }) => {
  // Different animations based on feature type
  if (featureId === 'updates') {
    return (
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <DeviceIcon className="text-ts-grey-500" size={20} />
          <ArrowRight className="mx-1 sm:mx-2 text-ts-grey-400" size={16} />
          <div className="relative">
            <ServerIcon className="text-ts-grey-500" size={20} />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
              <Clock className="h-4 w-4 sm:h-6 sm:w-6 text-ts-orange-300" />
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-4 flex justify-center">
          <div className="animate-pulse bg-ts-orange-200 rounded-md p-1 sm:p-2 text-xs text-ts-grey-700 w-36 sm:w-48 text-center">
            Waiting for TTL expiration
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'caching') {
    return (
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <DeviceIcon className="text-ts-grey-500" size={20} />
            <ArrowRight className="mx-1 sm:mx-2 text-ts-grey-400" size={16} />
            <ServerIcon className="text-ts-grey-500" size={20} />
          </div>
          <div className="animate-pulse bg-ts-orange-200 rounded-md p-1 sm:p-2 text-xs w-28 sm:w-36 text-center">
            <Clock className="inline-block h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span>TTL: 3600s</span>
          </div>
          <div className="mt-2 text-xs text-ts-grey-500">
            Cache expires
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'security') {
    return (
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center mb-3">
          <DeviceIcon className="text-ts-grey-500" size={20} />
          <div className="mx-2 sm:mx-4 flex flex-col items-center">
            <div className="bg-ts-red-50 px-2 py-1 rounded-lg border border-ts-red-200">
              <span className="text-xs text-ts-red-400">Unencrypted</span>
            </div>
          </div>
          <ServerIcon className="text-ts-grey-500" size={20} />
        </div>
        <div className="flex justify-center">
          <div className="bg-ts-red-50 border border-ts-red-200 rounded-md p-1 sm:p-2 text-xs text-ts-grey-700 w-32 sm:max-w-xs text-center">
            <span className="text-ts-red-400">●</span> Vulnerable to interception
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'resolution') {
    return (
      <div className="relative">
        <div className="flex flex-col items-center scale-90 sm:scale-100">
          <div className="flex items-center mb-1 sm:mb-2">
            <DeviceIcon className="text-ts-grey-500" size={16} />
            <ArrowRight className="mx-1 text-ts-grey-400" size={12} />
            <ServerIcon className="text-ts-grey-500" size={16} />
            <div className="ml-1 text-xs text-ts-grey-500">Resolver</div>
          </div>
          <div className="flex items-center mb-1 sm:mb-2">
            <div className="w-4 sm:w-6"></div>
            <ArrowRight className="transform rotate-90 mx-1 text-ts-grey-400" size={12} />
          </div>
          <div className="flex items-center mb-1 sm:mb-2">
            <ServerIcon className="text-ts-grey-500" size={16} />
            <div className="ml-1 text-xs text-ts-grey-500">Root</div>
          </div>
          <div className="flex items-center mb-1 sm:mb-2">
            <div className="w-4 sm:w-6"></div>
            <ArrowRight className="transform rotate-90 mx-1 text-ts-grey-400" size={12} />
          </div>
          <div className="flex items-center">
            <ServerIcon className="text-ts-grey-500" size={16} />
            <div className="ml-1 text-xs text-ts-grey-500">Auth</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {Icon && <Icon size={32} className={`text-${color}-300 mb-2 sm:mb-4`} />}
      <div className="text-xs sm:text-sm text-center text-ts-grey-500">
        Traditional DNS
      </div>
    </div>
  );
};

const DNSAnimationTailscale: React.FC<AnimationProps> = ({ icon: Icon, color, featureId }) => {
  if (featureId === 'updates') {
    return (
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="relative">
            <ServerIcon className="text-ts-grey-500" size={20} />
            <div className="absolute -top-2 -right-2">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-ts-green-300" />
            </div>
          </div>
          <ArrowRight className="mx-1 sm:mx-2 text-ts-grey-400" size={16} />
          <DeviceIcon className="text-ts-grey-500" size={20} />
        </div>
        <div className="mt-2 sm:mt-4 flex justify-center">
          <div className="bg-ts-green-200 rounded-md p-1 sm:p-2 text-xs text-ts-grey-700 w-36 sm:w-48 text-center">
            Instant push updates
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'caching') {
    return (
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <DeviceIcon className="text-ts-grey-500" size={20} />
            <div className="mx-1 sm:mx-2 px-1 sm:px-2 py-0.5 sm:py-1 bg-ts-green-300 text-white text-xs rounded text-center" style={{ fontSize: '0.65rem' }}>
              100.100.100.100
            </div>
          </div>
          <div className="bg-ts-green-200 rounded-md p-1 sm:p-2 text-xs w-28 sm:w-36 text-center">
            <Zap className="inline-block h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span>Always fresh</span>
          </div>
          <div className="mt-2 text-xs text-ts-grey-500">
            No TTL needed
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'security') {
    return (
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center mb-3">
          <DeviceIcon className="text-ts-grey-500" size={20} />
          <div className="mx-2 sm:mx-4 flex flex-col items-center">
            <div className="bg-ts-green-50 px-2 py-1 rounded-lg border border-ts-green-200 flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-ts-green-300 mr-1" />
              <span className="text-xs text-ts-green-400">Secure</span>
            </div>
          </div>
          <div className="px-1 sm:px-2 py-0.5 sm:py-1 bg-ts-grey-200 text-ts-grey-500 text-xs rounded text-center" style={{ fontSize: '0.65rem' }}>
            Quad100
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-ts-green-50 border border-ts-green-200 rounded-md p-1 sm:p-2 text-xs text-ts-grey-700 w-32 sm:max-w-xs text-center">
            <span className="text-ts-green-400">●</span> Local-first resolution
          </div>
        </div>
      </div>
    );
  }

  if (featureId === 'resolution') {
    return (
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <DeviceIcon className="text-ts-grey-500" size={20} />
            <div className="mx-1 sm:mx-2 relative">
              <div className="px-1 sm:px-2 py-0.5 sm:py-1 bg-ts-green-300 text-white text-xs rounded text-center" style={{ fontSize: '0.65rem' }}>
                Quad100
              </div>
              <div className="absolute -bottom-4 left-0 right-0 text-center">
                <span className="text-xs text-ts-grey-500" style={{ fontSize: '0.65rem' }}>Local</span>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 bg-ts-green-200 rounded-md p-1 sm:p-2 text-xs text-ts-grey-700 text-center w-32 sm:w-auto">
            Instant local resolution
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {Icon && <Icon size={32} className={`text-${color}-300 mb-2 sm:mb-4`} />}
      <div className="text-xs sm:text-sm text-center text-ts-grey-500">
        Tailscale DNS
      </div>
    </div>
  );
};

export default DNSComparison;