import React from 'react';
import { Building2, Network, Globe } from 'lucide-react';

const RealWorldScenarios: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">Real-World Scenarios</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scenario 1: Corporate DNS Integration */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-5 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#E7F1FF] p-3 rounded-lg mr-3">
              <Building2 size={24} className="text-[#3B51AA]" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#19224A] mb-2">Corporate DNS Integration</h3>
              <p className="text-sm text-[#444342]">
                Integrating with existing corporate DNS infrastructure:
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Forward queries to corporate resolvers</li>
                  <li>Configure split DNS rules for internal domains</li>
                  <li>Add corporate domains as search domains</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Scenario 2: Exit Nodes and DNS */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-5 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#EFFFED] p-3 rounded-lg mr-3">
              <Network size={24} className="text-[#22AB74]" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#19224A] mb-2">Exit Nodes and DNS</h3>
              <p className="text-sm text-[#444342]">
                Managing DNS with exit nodes:
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Forward all DNS queries through exit node tunnel</li>
                  <li>Prevent DNS query information leakage</li>
                  <li>Use proxy resolver on exit node</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Scenario 3: Split DNS with Exit Nodes */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] p-5 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#FFF6F4] p-3 rounded-lg mr-3">
              <Globe size={24} className="text-[#ED6F66]" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[#19224A] mb-2">Split DNS with Exit Nodes</h3>
              <p className="text-sm text-[#444342]">
                Fine-tuning name resolution:
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Override default exit node DNS behavior</li>
                  <li>Configure specific domain routing</li>
                  <li>Balance between exit nodes and default resolvers</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealWorldScenarios;