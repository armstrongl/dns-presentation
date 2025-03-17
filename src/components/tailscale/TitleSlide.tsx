import React from 'react';
import { Network, ArrowRight, Globe } from 'lucide-react';

const TitleSlide: React.FC = () => {
  return (
    <div className="bg-[#F9F7F6] rounded-xl border border-[#EEEBEA] shadow-md p-8 w-full max-w-4xl mx-auto min-h-[500px] flex flex-col">
      {/* Top Right Corner - Tailscale Logo */}
      <div className="self-end mb-8">
        {/* Replace with actual Tailscale logo - this is a placeholder */}
        <div className="text-[#3B51AA] font-semibold text-lg">Tailscale</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#19224A] text-center mb-4">
          DNS and Tailscale
        </h1>
        <h2 className="text-xl md:text-2xl text-[#3B51AA] text-center mb-8">
          How Modern Name Resolution Works
        </h2>

        {/* Visual Element */}
        <div className="my-10 flex items-center">
          <div className="bg-[#E7F1FF] p-4 rounded-lg">
            <Globe size={48} className="text-[#3B51AA]" />
          </div>
          <div className="mx-6">
            <ArrowRight size={32} className="text-[#6395F5]" />
          </div>
          <div className="bg-[#EFFFED] p-4 rounded-lg">
            <Network size={48} className="text-[#22AB74]" />
          </div>
        </div>

        {/* Presenter Info */}
        <div className="mt-6">
          <p className="text-lg text-[#444342]">Presented by</p>
          <p className="text-xl font-medium text-[#19224A]">Larah</p>
          <p className="text-base text-[#706E6D]">Technical Writer, Tailscale</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 px-4 py-3 bg-[#EEEBEA] rounded-lg text-center">
        <p className="text-sm text-[#444342]">
          Understanding the magic behind Tailscale&apos;s DNS implementation
        </p>
      </div>
    </div>
  );
};

export default TitleSlide;