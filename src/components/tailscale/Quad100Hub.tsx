import React from 'react';
import { HelpCircle, Globe, Network, Lock, Laptop } from 'lucide-react';

const Quad100Hub: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">Quad100: Central DNS Resolver Hub</h2>

      <div className="relative w-full h-[400px]">
        {/* Central Quad100 Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-[#3B51AA] rounded-full flex flex-col items-center justify-center text-white shadow-lg z-10">
          <p className="font-bold text-lg">QUAD100</p>
          <p className="text-sm">100.100.100.100</p>
        </div>

        {/* Tailnet Names Node */}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#22AB74] rounded-full flex flex-col items-center justify-center text-white shadow-md">
          <Network size={20} className="mb-1" />
          <p className="text-xs font-medium">Tailnet</p>
          <p className="text-xs">Names</p>
        </div>

        {/* Connection from Tailnet Names to Hub */}
        <svg className="absolute left-[25%] top-[30%] w-40 h-40 overflow-visible" viewBox="0 0 100 100" fill="none">
          <path d="M 20,20 L 45,45" stroke="#22AB74" strokeWidth="3" />
          <polygon points="45,45 40,35 30,40" fill="#22AB74" />
        </svg>
        <span className="absolute left-[28%] top-[28%] transform -rotate-30 text-xs font-medium text-[#22AB74]">
          Local Resolution
        </span>

        {/* External Domains Node */}
        <div className="absolute right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#E07D19] rounded-full flex flex-col items-center justify-center text-white shadow-md">
          <Globe size={20} className="mb-1" />
          <p className="text-xs font-medium">External</p>
          <p className="text-xs">Domains</p>
        </div>

        {/* Connection from External Domains to Hub */}
        <svg className="absolute right-[25%] top-[30%] w-40 h-40 overflow-visible" viewBox="0 0 100 100" fill="none">
          <path d="M 20,20 L 45,45" stroke="#E07D19" strokeWidth="3" transform="scale(-1, 1) translate(-100, 0)" />
          <polygon points="55,45 60,35 70,40" fill="#E07D19" />
        </svg>
        <span className="absolute right-[28%] top-[28%] transform rotate-30 text-xs font-medium text-[#E07D19]">
          Forward Queries
        </span>

        {/* Split DNS Node */}
        <div className="absolute left-1/4 bottom-1/4 -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-[#714591] rounded-full flex flex-col items-center justify-center text-white shadow-md">
          <HelpCircle size={20} className="mb-1" />
          <p className="text-xs font-medium">Split DNS</p>
          <p className="text-xs">Rules</p>
        </div>

        {/* Connection from Split DNS to Hub */}
        <svg className="absolute left-[25%] bottom-[30%] w-40 h-40 overflow-visible" viewBox="0 0 100 100" fill="none">
          <path d="M 20,80 L 45,55" stroke="#714591" strokeWidth="3" />
          <polygon points="45,55 40,65 30,60" fill="#714591" />
        </svg>
        <span className="absolute left-[28%] bottom-[28%] transform rotate-30 text-xs font-medium text-[#714591]">
          Custom Routing
        </span>

        {/* DNS over HTTPS Node */}
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-24 h-24 bg-[#ED6F66] rounded-full flex flex-col items-center justify-center text-white shadow-md">
          <Lock size={20} className="mb-1" />
          <p className="text-xs font-medium">DNS-over-</p>
          <p className="text-xs">HTTPS</p>
        </div>

        {/* Connection from DNS over HTTPS to Hub */}
        <svg className="absolute right-[25%] bottom-[30%] w-40 h-40 overflow-visible" viewBox="0 0 100 100" fill="none">
          <path d="M 20,80 L 45,55" stroke="#ED6F66" strokeWidth="3" transform="scale(-1, 1) translate(-100, 0)" />
          <polygon points="55,55 60,65 70,60" fill="#ED6F66" />
        </svg>
        <span className="absolute right-[28%] bottom-[28%] transform -rotate-30 text-xs font-medium text-[#ED6F66]">
          Secure Queries
        </span>

        {/* Application Flow Indicator (simplified) */}
        <div className="absolute left-4 top-20 flex items-center">
          <div className="bg-[#706E6D] text-white px-3 py-1 rounded text-xs">
            App
          </div>
          <div className="w-16 h-px border-t-2 border-dashed border-[#706E6D] ml-2"></div>
          <div className="text-xs ml-2 text-[#706E6D]">All DNS Queries</div>
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-[#EEEBEA] rounded-lg p-4 mt-4">
        <h3 className="text-center font-medium text-[#19224A] mb-2">Quad100 Resolver Functions:</h3>
        <p className="text-sm text-[#444342] text-center">
          Central resolver, instant updates, intelligent query routing, local-first resolution
        </p>
      </div>

      {/* Real Example */}
      <div className="bg-white rounded-lg border border-[#DAD6D5] p-4 mt-6">
        <div className="flex items-start space-x-4">
          <Laptop size={24} className="text-[#3B51AA] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-[#19224A] mb-2">App DNS Resolution Flow</h3>
            <ol className="text-xs text-[#444342] space-y-2 list-decimal pl-4">
              <li>Application makes DNS query</li>
              <li>Operating system sends query to 100.100.100.100</li>
              <li>Quad100 checks if it&apos;s a tailnet name</li>
              <li>If yes, resolves locally; if no, forwards to configured resolver</li>
              <li>Result returned to application</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quad100Hub;