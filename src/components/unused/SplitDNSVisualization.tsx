import React from 'react';
import { ArrowDownRight, Database, Network, Globe, Server, GitFork } from 'lucide-react';

const SplitDNSVisualization: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">Split DNS: Custom Domain Resolution</h2>

      {/* Main Visualization */}
      <div className="relative w-full h-[350px]">
        {/* DNS Query at the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-lg border border-[#DAD6D5] px-4 py-2 shadow-sm">
          <p className="font-medium text-[#19224A]">DNS Query</p>
          <code className="text-sm text-[#444342] bg-[#F9F7F6] px-2 py-1 rounded mt-1 inline-block">
            what-is-the-ip-for.example.com?
          </code>
        </div>

        {/* Arrow down to fork */}
        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 h-16 w-px border-l-2 border-[#706E6D]"></div>

        {/* Domain Name Check/Fork */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2">
          <GitFork size={36} className="text-[#3B51AA]" />
        </div>

        {/* Three branches with arrows */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 flex justify-center w-full">
          {/* Left branch - corp.example.com */}
          <div className="flex flex-col items-center mx-10">
            <ArrowDownRight size={24} className="text-[#714591] transform -rotate-45 mb-2" />
            <div className="bg-[#F8EDFF] border border-[#B28FCC] text-[#714591] px-3 py-2 rounded-lg text-center w-40">
              <p className="text-sm font-medium">corp.example.com</p>
              <p className="text-xs">Corporate domains</p>
            </div>
            <div className="h-10 w-px border-l-2 border-[#714591] my-2"></div>
            <div className="bg-white border border-[#B28FCC] px-3 py-2 rounded-lg text-center w-40 shadow-sm">
              <div className="flex justify-center mb-1">
                <Server size={18} className="text-[#714591]" />
              </div>
              <p className="text-xs font-medium text-[#444342]">Corporate Resolver</p>
              <p className="text-xs text-[#706E6D]">10.1.1.53</p>
            </div>
          </div>

          {/* Middle branch - ts.net */}
          <div className="flex flex-col items-center mx-10">
            <ArrowDownRight size={24} className="text-[#22AB74] transform rotate-90 mb-2" />
            <div className="bg-[#EFFFED] border border-[#85D996] text-[#22AB74] px-3 py-2 rounded-lg text-center w-40">
              <p className="text-sm font-medium">*.ts.net</p>
              <p className="text-xs">Tailnet domains</p>
            </div>
            <div className="h-10 w-px border-l-2 border-[#22AB74] my-2"></div>
            <div className="bg-white border border-[#85D996] px-3 py-2 rounded-lg text-center w-40 shadow-sm">
              <div className="flex justify-center mb-1">
                <Network size={18} className="text-[#22AB74]" />
              </div>
              <p className="text-xs font-medium text-[#444342]">MagicDNS</p>
              <p className="text-xs text-[#706E6D]">Local Resolution</p>
            </div>
          </div>

          {/* Right branch - Public domains */}
          <div className="flex flex-col items-center mx-10">
            <ArrowDownRight size={24} className="text-[#3B51AA] transform rotate-45 mb-2" />
            <div className="bg-[#E7F1FF] border border-[#95BFFF] text-[#3B51AA] px-3 py-2 rounded-lg text-center w-40">
              <p className="text-sm font-medium">*.com, *.org, etc.</p>
              <p className="text-xs">Public domains</p>
            </div>
            <div className="h-10 w-px border-l-2 border-[#3B51AA] my-2"></div>
            <div className="bg-white border border-[#95BFFF] px-3 py-2 rounded-lg text-center w-40 shadow-sm">
              <div className="flex justify-center mb-1">
                <Globe size={18} className="text-[#3B51AA]" />
              </div>
              <p className="text-xs font-medium text-[#444342]">Public Resolver</p>
              <p className="text-xs text-[#706E6D]">1.1.1.1 or 8.8.8.8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Split DNS Configuration Example */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-4">
          <h3 className="text-sm font-medium text-[#19224A] mb-3">Split DNS Configuration</h3>
          <div className="bg-[#F9F7F6] rounded border border-[#EEEBEA] p-3 font-mono text-xs text-[#444342]">
            <p className="mb-2"># Example split DNS configuration</p>
            <p className="mb-1"><span className="text-[#3B51AA]">Domain:</span> corp.example.com</p>
            <p className="mb-1"><span className="text-[#3B51AA]">Resolver:</span> 10.1.1.53</p>
            <p className="mb-2"><span className="text-[#3B51AA]">Namespace:</span> Corporate</p>
            <p className="mb-1"><span className="text-[#3B51AA]">Domain:</span> dev.example.com</p>
            <p className="mb-1"><span className="text-[#3B51AA]">Resolver:</span> 10.2.1.53</p>
            <p><span className="text-[#3B51AA]">Namespace:</span> Development</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DAD6D5] p-4">
          <h3 className="text-sm font-medium text-[#19224A] mb-3">Key Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="bg-[#E7F1FF] text-[#3B51AA] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Database size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">Custom resolvers</span> for different domains
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-[#E7F1FF] text-[#3B51AA] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Database size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">Unified management</span> of DNS across all devices
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-[#E7F1FF] text-[#3B51AA] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Database size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">Private domain access</span> without VPN configuration
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-[#E7F1FF] text-[#3B51AA] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Database size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">Simple configuration</span> in Tailscale admin console
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplitDNSVisualization;