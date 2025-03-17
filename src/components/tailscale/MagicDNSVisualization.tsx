import React from 'react';
import { Cloud, Laptop, Server, ArrowDown, ArrowRight } from 'lucide-react';

const MagicDNSVisualization: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">MagicDNS: Automatic Name Resolution</h2>

      {/* Visualization */}
      <div className="relative flex flex-col items-center justify-center mb-6">
        {/* Tailscale Control Server */}
        <div className="relative">
          <div className="bg-[#3B51AA] text-white px-6 py-3 rounded-lg shadow-md flex items-center justify-center mb-16">
            <Cloud size={24} className="mr-2" />
            <div>
              <p className="font-medium text-lg">Tailscale Control</p>
              <p className="text-sm opacity-80">Private DNS Zone</p>
            </div>
          </div>

          {/* Benefits Pills */}
          <div className="absolute -top-3 -left-24 bg-[#E7F1FF] text-[#3B51AA] text-xs font-medium px-3 py-1 rounded-full">
            Instant Updates
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E7F1FF] text-[#3B51AA] text-xs font-medium px-3 py-1 rounded-full">
            Automatic Names
          </div>
          <div className="absolute -top-3 -right-24 bg-[#E7F1FF] text-[#3B51AA] text-xs font-medium px-3 py-1 rounded-full">
            No Cache Delays
          </div>
        </div>

        {/* Devices and Connections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full max-w-2xl">
          {/* Left Device: Laptop */}
          <div className="relative">
            {/* Push Update Arrow */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 border-l-2 border-dashed border-[#6395F5]">
              <ArrowDown size={20} className="absolute -bottom-2 -left-2 text-[#6395F5]" />
              <span className="absolute -left-16 top-1/2 -translate-y-1/2 transform -rotate-45 text-xs font-medium text-[#3B51AA]">
                Push Update
              </span>
            </div>

            <div className="bg-[#22AB74] text-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-3">
                <Laptop size={24} />
                <p className="text-xs opacity-80">100.100.100.100</p>
              </div>
              <p className="font-medium text-lg">laptop</p>
              <p className="text-sm">100.x.y.1</p>
              <p className="text-xs opacity-80 mt-1">laptop.tailnet.ts.net</p>
            </div>

            <div className="absolute -top-10 right-0 text-xs italic text-[#706E6D]">
              Quad100 Resolver
            </div>
          </div>

          {/* Right Device: Server */}
          <div className="relative">
            {/* Push Update Arrow */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 border-l-2 border-dashed border-[#6395F5]">
              <ArrowDown size={20} className="absolute -bottom-2 -left-2 text-[#6395F5]" />
              <span className="absolute -right-16 top-1/2 -translate-y-1/2 transform rotate-45 text-xs font-medium text-[#3B51AA]">
                Push Update
              </span>
            </div>

            <div className="bg-[#22AB74] text-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-3">
                <Server size={24} />
                <p className="text-xs opacity-80">100.100.100.100</p>
              </div>
              <p className="font-medium text-lg">server</p>
              <p className="text-sm">100.x.y.2</p>
              <p className="text-xs opacity-80 mt-1">server.tailnet.ts.net</p>
            </div>

            <div className="absolute -top-10 left-0 text-xs italic text-[#706E6D]">
              Quad100 Resolver
            </div>
          </div>
        </div>

        {/* WireGuard Connection */}
        <div className="relative mt-6 w-full max-w-2xl">
          <div className="border-t-2 border-dashed border-[#22AB74] absolute top-0 left-1/4 right-1/4"></div>
          <p className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-[#22AB74] bg-[#F9F7F6] px-2">
            WireGuard Tunnel
          </p>
        </div>
      </div>

      {/* DNS Query Example Box */}
      <div className="bg-[#EEEBEA] rounded-lg p-4 mt-8">
        <h3 className="text-center font-medium text-[#19224A] mb-2">Simple Hostname Resolution</h3>
        <div className="flex items-center justify-center flex-wrap text-sm text-[#444342]">
          <code className="bg-white px-2 py-1 rounded mr-2">ping server</code>
          <ArrowRight size={16} className="mx-1 text-[#706E6D]" />
          <code className="bg-white px-2 py-1 rounded mx-2">ping server.tailnet.ts.net</code>
          <ArrowRight size={16} className="mx-1 text-[#706E6D]" />
          <code className="bg-white px-2 py-1 rounded ml-2">100.x.y.2</code>
        </div>
      </div>
    </div>
  );
};

export default MagicDNSVisualization;