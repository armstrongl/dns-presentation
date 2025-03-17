import React from 'react';
import { ArrowRight, Server, Laptop, Database, CheckCircle } from 'lucide-react';

// Tailscale colors
// const colors = {
//   white: '#FFFFFF',
//   lightGrey: '#F9F7F6',
//   midGrey: '#DAD6D5',
//   darkGrey: '#444342',
//   textGrey: '#706E6D',
//   darkBlue: '#19224A',
//   midBlue: '#3B51AA',
//   lightBlue: '#6395F5',
// };

const TraditionalDNSFlow: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#19224A] mb-6">Traditional DNS Resolution Process</h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Step 1: Client Device */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] shadow-sm p-4 flex flex-col items-center justify-center text-center w-full md:w-1/4 h-32">
          <Laptop className="text-[#3B51AA] mb-2" size={32} />
          <p className="font-medium text-[#19224A]">Client Device</p>
          <p className="text-xs text-[#706E6D]">DNS Query</p>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex items-center">
          <ArrowRight className="text-[#6395F5]" size={24} />
        </div>
        <div className="md:hidden flex items-center">
          <ArrowRight className="text-[#6395F5] rotate-90" size={24} />
        </div>

        {/* Step 2: Default Resolver */}
        <div className="relative bg-white rounded-lg border border-[#DAD6D5] shadow-sm p-4 flex flex-col items-center justify-center text-center w-full md:w-1/4 h-32">
          <div className="absolute -top-6 text-xs italic text-[#706E6D]">Cache TTL: Minutes to Days</div>
          <Server className="text-[#3B51AA] mb-2" size={32} />
          <p className="font-medium text-[#19224A]">Default Resolver</p>
          <p className="text-xs text-[#706E6D]">Checks Cache</p>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex items-center">
          <ArrowRight className="text-[#6395F5]" size={24} />
        </div>
        <div className="md:hidden flex items-center">
          <ArrowRight className="text-[#6395F5] rotate-90" size={24} />
        </div>

        {/* Step 3: DNS Hierarchy */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] shadow-sm p-4 flex flex-col items-center justify-center text-center w-full md:w-1/4 h-32">
          <Database className="text-[#3B51AA] mb-2" size={32} />
          <p className="font-medium text-[#19224A]">DNS Hierarchy</p>
          <p className="text-xs text-[#706E6D]">Recursive Query</p>
        </div>

        {/* Arrow 3 */}
        <div className="hidden md:flex items-center">
          <ArrowRight className="text-[#6395F5]" size={24} />
        </div>
        <div className="md:hidden flex items-center">
          <ArrowRight className="text-[#6395F5] rotate-90" size={24} />
        </div>

        {/* Step 4: Return Result */}
        <div className="bg-white rounded-lg border border-[#DAD6D5] shadow-sm p-4 flex flex-col items-center justify-center text-center w-full md:w-1/4 h-32">
          <CheckCircle className="text-[#3B51AA] mb-2" size={32} />
          <p className="font-medium text-[#19224A]">Return Result</p>
          <p className="text-xs text-[#706E6D]">IP Address</p>
        </div>
      </div>

      {/* Cache Miss Path - Simplified for this responsive layout */}
      <div className="relative mx-auto w-3/4 md:w-1/2 h-12 hidden md:block">
        <div className="absolute left-1/4 right-1/3 top-0 border-t-2 border-dashed border-[#AFACAB] rounded"></div>
        <div className="absolute text-xs text-[#706E6D] left-1/3 -top-4">Cache Miss</div>
      </div>

      {/* Process Steps */}
      <div className="bg-[#EEEBEA] rounded-lg p-4 mt-6">
        <ol className="text-sm text-[#444342] space-y-2 pl-5 list-decimal">
          <li>Device sends query to configured resolver</li>
          <li>Resolver checks cache, if not found...</li>
          <li>Performs recursive resolution through hierarchy</li>
          <li>Returns and caches results with TTL</li>
          <li>Client receives IP address</li>
          <li>Process repeats for new domains</li>
        </ol>
      </div>
    </div>
  );
};

export default TraditionalDNSFlow;