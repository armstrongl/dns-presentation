import React from 'react';
import { CheckCircle, XCircle, Server, Laptop, Database, Network } from 'lucide-react';

const DNSComparisonTable: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">DNS Comparison: Traditional vs. Tailscale</h2>

      {/* Comparison Table */}
      <div className="overflow-hidden border rounded-lg">
        {/* Table Header */}
        <div className="grid grid-cols-2">
          <div className="bg-[#19224A] text-white p-3 font-medium text-lg rounded-tl-md">
            Traditional DNS
          </div>
          <div className="bg-[#3B51AA] text-white p-3 font-medium text-lg rounded-tr-md">
            Tailscale DNS
          </div>
        </div>

        {/* Table Rows */}
        <div className="grid grid-cols-2 bg-white">
          <div className="p-4 border-b border-[#EEEBEA] flex items-start">
            <XCircle size={20} className="text-[#940821] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Pull-based updates with propagation delays</span>
          </div>
          <div className="p-4 border-b border-[#EEEBEA] flex items-start">
            <CheckCircle size={20} className="text-[#22AB74] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Push-based instant updates</span>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-[#F9F7F6]">
          <div className="p-4 border-b border-[#EEEBEA] flex items-start">
            <XCircle size={20} className="text-[#940821] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Complex cache management with TTLs</span>
          </div>
          <div className="p-4 border-b border-[#EEEBEA] flex items-start">
            <CheckCircle size={20} className="text-[#22AB74] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">No TTL needed for tailnet names</span>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-white">
          <div className="p-4 border-b border-[#EEEBEA] flex items-start">
            <XCircle size={20} className="text-[#940821] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Unencrypted by default</span>
          </div>
          <div className="p-4 border-b border-[#EEEBEA] flex items-start">
            <CheckCircle size={20} className="text-[#22AB74] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Local-first or DoH encrypted</span>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-[#F9F7F6]">
          <div className="p-4 flex items-start">
            <XCircle size={20} className="text-[#940821] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Recursive public resolution for all requests</span>
          </div>
          <div className="p-4 flex items-start">
            <CheckCircle size={20} className="text-[#22AB74] flex-shrink-0 mr-2 mt-1" />
            <span className="text-sm text-[#444342]">Local-first resolution for tailnet names</span>
          </div>
        </div>
      </div>

      {/* Visual Diagrams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Traditional DNS Diagram */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-4">
          <h3 className="text-sm font-medium text-[#19224A] mb-3">Traditional DNS Architecture</h3>
          <div className="relative h-48 flex items-center justify-center">
            {/* Simplified Traditional DNS visualization */}
            <div className="relative flex flex-col items-center">
              <Laptop size={32} className="text-[#3B51AA] mb-8" />
              <div className="absolute left-4 top-16 w-px h-12 border-l-2 border-dashed border-[#AFACAB]"></div>
              <div className="absolute right-4 top-16 w-px h-12 border-l-2 border-dashed border-[#AFACAB]"></div>

              <div className="flex space-x-16">
                <Server size={24} className="text-[#6395F5]" />
                <Server size={24} className="text-[#6395F5]" />
                <Server size={24} className="text-[#6395F5]" />
              </div>
              <div className="mt-4 text-xs text-[#706E6D]">Multiple Recursive Queries</div>
            </div>
          </div>
        </div>

        {/* Tailscale DNS Diagram */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-4">
          <h3 className="text-sm font-medium text-[#19224A] mb-3">Tailscale DNS Architecture</h3>
          <div className="relative h-48 flex items-center justify-center">
            {/* Simplified Tailscale DNS visualization */}
            <div className="relative flex flex-col items-center">
              <div className="mb-4 px-6 py-2 rounded-md bg-[#3B51AA] text-white text-xs">
                Tailscale Control
              </div>
              <div className="h-8 w-px border-l-2 border-[#6395F5]"></div>

              <div className="flex space-x-16 my-2">
                <div className="flex flex-col items-center">
                  <Laptop size={24} className="text-[#22AB74] mb-2" />
                  <div className="text-xs text-[#706E6D]">Quad100</div>
                </div>
                <div className="flex flex-col items-center">
                  <Database size={24} className="text-[#22AB74] mb-2" />
                  <div className="text-xs text-[#706E6D]">Quad100</div>
                </div>
                <div className="flex flex-col items-center">
                  <Network size={24} className="text-[#22AB74] mb-2" />
                  <div className="text-xs text-[#706E6D]">Quad100</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-[#706E6D]">Push-Based Updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNSComparisonTable;