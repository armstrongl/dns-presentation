import React from 'react';
import { Globe } from 'lucide-react';

const SplitDNSWithExitNodes: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="bg-[#FFF6F4] p-3 rounded-lg mr-4">
          <Globe size={32} className="text-[#ED6F66]" />
        </div>
        <h2 className="text-3xl font-semibold text-[#19224A]">Split DNS with Exit Nodes</h2>
      </div>

      <div className="bg-white rounded-lg border border-[#DAD6D5] p-6 shadow-sm">
        <div>
          <h3 className="text-xl font-medium text-[#19224A] mb-4">Key Points</h3>
          <ul className="list-disc ml-6 space-y-3 text-[#444342]">
            <li>Configure domain-specific routing rules for different DNS resolvers</li>
            <li>Create an exeption to routing all DNS queries through the exit node tunnel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplitDNSWithExitNodes;