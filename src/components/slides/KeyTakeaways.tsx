import React from 'react';
import { AlertCircle, Zap, Layers } from 'lucide-react';

const KeyTakeaways: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">Key Takeaways</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Takeaway 1: Traditional DNS Limitations */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-5 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#FFF6F4] p-3 rounded-lg mr-4">
              <AlertCircle size={24} className="text-[#ED6F66]" />
            </div>
            <div>
              <h3 className="font-medium text-[#19224A] mb-2">Traditional DNS Limitations</h3>
              <p className="text-sm text-[#444342]">
                Traditional DNS has inherent limitations around cache consistency,
                security, and configuration complexity that make it challenging to use in modern networks.
              </p>
            </div>
          </div>
        </div>

        {/* Takeaway 2: Tailscale's Innovative Approach */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-5 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#E7F1FF] p-3 rounded-lg mr-4">
              <Zap size={24} className="text-[#3B51AA]" />
            </div>
            <div>
              <h3 className="font-medium text-[#19224A] mb-2">Tailscale&apos;s Approach</h3>
              <p className="text-sm text-[#444342]">
                Tailscale solves these issues with an architecture that pushes updates in
                realtime and resolves names locally on devices, eliminating propagation delays.
              </p>
            </div>
          </div>
        </div>

        {/* Takeaway 3: Core Features Working Together */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-5 shadow-sm md:col-span-2">
          <div className="flex items-start">
            <div className="bg-[#EFFFED] p-3 rounded-lg mr-4">
              <Layers size={24} className="text-[#22AB74]" />
            </div>
            <div>
              <h3 className="font-medium text-[#19224A] mb-2">Tailscale DNS Features</h3>
              <p className="text-sm text-[#444342]">
                <li>MagicDNS provides automatic name resolution.</li>
                <li>Quad100 enables instant updates.</li>
                <li>Split DNS allows granular control over how different domains are resolved.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTakeaways;