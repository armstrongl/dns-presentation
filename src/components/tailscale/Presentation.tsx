"use client";

import { useState, useEffect } from 'react';
import TitleSlide from './TitleSlide';
import TraditionalDNSFlow from './TraditionalDNSFlow';
import DNSComparisonTable from './DNSComparisonTable';
import MagicDNSVisualization from './MagicDNSVisualization';
import Quad100Hub from './Quad100Hub';
import SplitDNSVisualization from './SplitDNSVisualization';
import ExitNodeDNSFlow from './ExitNodeDNSFlow';
import KeyTakeaways from './KeyTakeaways';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: <TitleSlide />, name: "Title" },
    { component: <TraditionalDNSFlow />, name: "DNS Fundamentals" },
    { component: <DNSComparisonTable />, name: "DNS Comparison" },
    { component: <MagicDNSVisualization />, name: "MagicDNS" },
    { component: <Quad100Hub />, name: "Quad100" },
    { component: <SplitDNSVisualization />, name: "Split DNS" },
    { component: <ExitNodeDNSFlow />, name: "Exit Nodes" },
    { component: <KeyTakeaways />, name: "Key Takeaways" },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-ts-grey flex flex-col">
      {/* Presentation Controls */}
      <div className="flex justify-between items-center p-4 bg-white shadow-sm">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-ts-light-grey border border-ts-mid-grey rounded-md disabled:opacity-50 flex items-center"
        >
          <ChevronLeft className="mr-2" size={16} /> Previous
        </button>
        <div className="text-ts-dark-grey">
          Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].name}
        </div>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 bg-ts-mid-blue text-white rounded-md disabled:opacity-50 flex items-center"
        >
          Next <ChevronRight className="ml-2" size={16} />
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
          {slides[currentSlide].component}
        </div>
      </div>
    </div>
  );
};

export default Presentation;