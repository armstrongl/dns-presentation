import React from 'react';

const TitleSlide = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-ts-grey-50 rounded-lg p-8 md:p-12">
      {/* Content container */}
      <div className="flex flex-col items-center justify-center">
        {/* Presentation title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ts-grey-700 mb-4">
          DNS and Tailscale
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-ts-blue-300 mb-6">
          How Modern Name Resolution Works
        </h2>

        {/* Horizontal divider */}
        <div className="w-16 h-1 bg-ts-blue-300 mx-auto my-6"></div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-ts-grey-500 mb-8">
          Understanding the magic behind Tailscale&apos;s DNS implementation
        </p>
      </div>

      {/* Footer with date */}
      <div className="mt-8 text-right text-ts-grey-400 text-sm">
        March 2025
      </div>
    </div>
  );
};

export default TitleSlide;