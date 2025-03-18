import React from 'react';
import { Building2 } from 'lucide-react';

const CorporateDNSIntegration: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="bg-[#E7F1FF] p-3 rounded-lg mr-4">
          <Building2 size={32} className="text-[#3B51AA]" />
        </div>
        <h2 className="text-3xl font-semibold text-[#19224A]">Corporate DNS Integration</h2>
      </div>

      <div className="bg-white rounded-lg border border-[#DAD6D5] p-6 shadow-sm">
        <div>
          <h3 className="text-xl font-medium text-[#19224A] mb-4">Key Points</h3>
          <ul className="list-disc ml-6 space-y-3 text-[#444342]">
            <li>Forward queries to corporate resolvers for internal domain resolution</li>
            <li>Forward all other queries to a public DNS resolver like Google&apos;s 8.8.8.8</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorporateDNSIntegration;