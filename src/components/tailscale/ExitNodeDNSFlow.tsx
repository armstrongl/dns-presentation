import React from 'react';
import { Laptop, Server, Globe, ArrowRight, Shield, Database } from 'lucide-react';

const ExitNodeDNSFlow: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">Exit Nodes and DNS</h2>

      {/* Main Visualization */}
      <div className="relative w-full h-[300px]">
        {/* Client Device */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-48">
          <div className="bg-white rounded-lg border border-[#DAD6D5] p-4 shadow-sm">
            <div className="flex justify-center mb-2">
              <Laptop size={32} className="text-[#3B51AA]" />
            </div>
            <p className="text-center font-medium text-[#19224A]">Client Device</p>
            <div className="mt-2 text-center">
              <p className="text-xs text-[#706E6D]">100.x.y.z</p>
            </div>
          </div>

          {/* DNS Queries box under client device */}
          <div className="mt-4 bg-[#EEEBEA] p-2 rounded text-center">
            <p className="text-xs font-medium text-[#444342]">Local DNS Queries</p>
            <p className="text-xs text-[#706E6D] mt-1">(Captured by Tailscale)</p>
          </div>
        </div>

        {/* Secure Tunnel */}
        <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-[40%] flex flex-col items-center">
          <div className="relative w-full h-4 bg-[#EFFFED] border-2 border-[#22AB74] rounded-full">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full border border-[#22AB74] text-xs font-medium text-[#22AB74]">
              Secure WireGuard Tunnel
            </div>
          </div>

          {/* Arrow Right */}
          <ArrowRight size={24} className="text-[#22AB74] absolute right-0 top-1/2 -translate-y-1/2" />
        </div>

        {/* Exit Node */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48">
          <div className="bg-white rounded-lg border border-[#DAD6D5] p-4 shadow-sm">
            <div className="flex justify-center mb-2">
              <Server size={32} className="text-[#3B51AA]" />
            </div>
            <p className="text-center font-medium text-[#19224A]">Exit Node</p>
            <div className="mt-2 text-center">
              <p className="text-xs text-[#706E6D]">Public IP: 203.x.y.z</p>
            </div>
          </div>

          {/* Proxy Resolver box under exit node */}
          <div className="mt-4 bg-[#EEEBEA] p-2 rounded text-center">
            <p className="text-xs font-medium text-[#444342]">Proxy DNS Resolver</p>
            <p className="text-xs text-[#706E6D] mt-1">(Within Tailscale service)</p>
          </div>
        </div>

        {/* Internet Connection */}
        <div className="absolute right-[5%] h-[150px] top-[15%] flex items-center">
          <div className="h-[80%] w-px border-r-2 border-dashed border-[#6395F5]"></div>
          <div className="absolute top-0 -left-3">
            <ArrowRight size={16} className="text-[#6395F5] transform rotate-90" />
          </div>
        </div>

        {/* Internet Cloud */}
        <div className="absolute right-[5%] top-[5%]">
          <div className="flex items-center">
            <Globe size={24} className="text-[#6395F5] mr-2" />
            <p className="text-sm font-medium text-[#3B51AA]">Internet</p>
          </div>
        </div>
      </div>

      {/* How It Works & Benefits */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-4">
          <h3 className="text-sm font-medium text-[#19224A] mb-3">How It Works</h3>
          <ol className="text-sm text-[#444342] space-y-2 list-decimal pl-5">
            <li>Tailscale captures <strong>all</strong> DNS queries on the client device</li>
            <li>Queries are sent through the secure WireGuard tunnel to the exit node</li>
            <li>The proxy resolver on the exit node handles the DNS resolution</li>
            <li>Responses are returned through the tunnel to the client</li>
            <li>Split DNS rules can override exit node resolution for specific domains</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg border border-[#DAD6D5] p-4">
          <h3 className="text-sm font-medium text-[#19224A] mb-3">Privacy Benefits</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="bg-[#EFFFED] text-[#22AB74] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Shield size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">Prevents DNS leakage</span> through the local network
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-[#EFFFED] text-[#22AB74] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Shield size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">DNS requests appear to come from</span> the exit node, not your device
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-[#EFFFED] text-[#22AB74] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Shield size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">All traffic is encrypted</span> within the WireGuard tunnel
              </p>
            </li>
            <li className="flex items-start">
              <div className="bg-[#EFFFED] text-[#22AB74] p-1 rounded-full mr-2 flex-shrink-0 mt-0.5">
                <Shield size={12} />
              </div>
              <p className="text-sm text-[#444342]">
                <span className="font-medium">Prevents ISP DNS monitoring</span> for enhanced privacy
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Split DNS Override */}
      <div className="mt-6 bg-[#EEEBEA] rounded-lg p-4">
        <h3 className="text-sm font-medium text-[#19224A] mb-3 flex items-center">
          <Database size={16} className="text-[#714591] mr-2" />
          Split DNS Overrides with Exit Nodes
        </h3>
        <p className="text-sm text-[#444342] mb-2">
          You can still use split DNS rules to fine-tune resolution when using exit nodes:
        </p>
        <div className="bg-white rounded p-3 text-xs text-[#444342] font-mono">
          <p><span className="text-[#3B51AA]">
            Example: Even with an exit node, internal.example.com resolves via corporate DNS</span></p>
          <p className="mt-2">Domain: internal.example.com</p>
          <p>Resolver: 10.0.0.53 <span className="text-[#22AB74]">Internal resolver, accessed through tailnet</span></p>
          <p>Override Exit Node: true</p>
        </div>
      </div>
    </div>
  );
};

export default ExitNodeDNSFlow;