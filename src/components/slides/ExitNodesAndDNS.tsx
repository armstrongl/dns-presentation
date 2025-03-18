import React from 'react';
import { Network } from 'lucide-react';

const ExitNodesAndDNS: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="bg-[#EFFFED] p-3 rounded-lg mr-4">
          <Network size={32} className="text-[#22AB74]" />
        </div>
        <h2 className="text-3xl font-semibold text-[#19224A]">Exit Nodes and DNS</h2>
      </div>

      <div className="bg-white rounded-lg border border-[#DAD6D5] p-6 shadow-sm">
        <div>
          <h3 className="text-xl font-medium text-[#19224A] mb-4">Key Points</h3>
          <ul className="list-disc ml-6 space-y-3 text-[#444342]">
            <li>Route all DNS queries through exit node tunnel for enhanced privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExitNodesAndDNS;