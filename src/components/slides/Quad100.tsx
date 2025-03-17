import React, { useState } from 'react';
import { Laptop, Globe, Server, LucideIcon } from 'lucide-react';

// Tab component
const Tab = ({ active, onClick, children, color }: { active: boolean; onClick: () => void; children: React.ReactNode; color: 'green' | 'orange' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-colors ${
      active
        ? `bg-ts-${color}-300 text-white`
        : `bg-ts-${color}-50 text-ts-${color}-300 hover:bg-ts-${color}-100`
    }`}
  >
    {children}
  </button>
);

// Node component for visualization
const Node = ({ icon: Icon, label, color, active = true }: { icon: LucideIcon; label: string; color: string; active?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className={`w-16 h-16 rounded-full ${active ? `bg-ts-${color}-100` : 'bg-ts-grey-200'} flex items-center justify-center relative z-10`}>
      <Icon className={active ? `text-ts-${color}-400` : 'text-ts-grey-400'} size={32} />
    </div>
    <span className={`mt-2 ${active ? 'text-ts-grey-700 font-medium' : 'text-ts-grey-400'}`}>{label}</span>
  </div>
);

// Connection line component
const ConnectionLine = ({ active, color, label }: { active: boolean; color: string; label: string }) => (
  <div className={`w-2/5 border-t-2 ${active ? 'border-ts-grey-200' : 'border-ts-grey-200 opacity-30'} relative flex items-center`}>
    {active && (
      <>
        <div className={`absolute right-0 top-0 h-4 w-4 bg-ts-${color}-300 -mt-2 -mr-2 transform rotate-45`}></div>
        <span className={`absolute -top-6 right-1/2 bg-ts-${color}-50 px-2 py-1 rounded text-xs text-ts-${color}-400 whitespace-nowrap`}>
          {label}
        </span>
      </>
    )}
  </div>
);

const Quad100Slide = () => {
  const [activeTab, setActiveTab] = useState<'tailnet' | 'external'>('tailnet');

  return (
    <div className="w-full h-full flex flex-col bg-white p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-ts-grey-700">Quad100: Tailscale&apos;s DNS Resolver</h2>
        <p className="text-ts-grey-600 mt-2">
          Quad100 is a DNS resolver at <code className="bg-ts-purple-50 px-2 py-1 rounded text-ts-purple-400 font-mono">100.100.100.100</code> on every Tailscale device.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center items-center mb-8 gap-4">
        <Tab active={activeTab === 'tailnet'} onClick={() => setActiveTab('tailnet')} color="green">
          Tailnet Names
        </Tab>
        <Tab active={activeTab === 'external'} onClick={() => setActiveTab('external')} color="orange">
          External Names
        </Tab>
      </div>

      {/* Main visualization */}
      <div className="flex-1 bg-ts-grey-50 rounded-lg p-8 flex flex-col items-center justify-center relative min-h-[400px]">
        {/* Connection lines - moved to top layer */}
        <div className="absolute top-1/2 left-0 w-full flex items-center justify-center -mt-6 pointer-events-none z-0">
          <ConnectionLine active={true} color="green" label="Query" />
          <div className="w-1/5"></div>
          <ConnectionLine active={activeTab === 'external'} color="orange" label="Forward" />
        </div>

        {/* Nodes container */}
        <div className="flex items-center justify-between w-full max-w-3xl mx-auto mb-16 relative z-10">
          <Node icon={Laptop} label="Device" color="green" />

          {/* Quad100 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-32 h-20 rounded-lg bg-ts-purple-100 flex flex-col items-center justify-center">
              <span className="text-ts-purple-400 font-medium">Quad100</span>
              <span className="font-mono text-xs text-ts-purple-400">100.100.100.100</span>
            </div>
            {activeTab === 'tailnet' && (
              <div className="mt-3">
                <span className="inline-flex items-center bg-ts-green-50 text-ts-green-400 px-3 py-1 rounded-full text-sm">
                  <Server className="mr-1" size={16} />
                  Resolves locally
                </span>
              </div>
            )}
          </div>

          <Node icon={Globe} label="External" color="orange" active={activeTab === 'external'} />
        </div>

        {/* Description text */}
        <div className="absolute bottom-8 left-0 w-full px-8">
          <div className={`p-3 rounded-lg text-sm text-center max-w-2xl mx-auto ${
            activeTab === 'tailnet' ? 'bg-ts-green-50 text-ts-green-600' : 'bg-ts-orange-50 text-ts-orange-600'
          }`}>
            {activeTab === 'tailnet' ? (
              <>Resolves device names like <code className="bg-white px-1 rounded">laptop.tailnet.ts.net</code> locally</>
            ) : (
              <>Forwards queries for external domains to your configured DNS resolver</>
            )}
          </div>
        </div>
      </div>

      {/* Key benefits */}
      <div className="mt-6 flex space-x-4">
        {['Instant updates', 'Smart routing', 'Better privacy'].map((benefit) => (
          <div key={benefit} className="flex-1 p-3 bg-ts-grey-50 rounded-lg flex items-center text-sm text-ts-grey-600">
            <span className="text-ts-green-300 mr-2">✓</span>
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quad100Slide;