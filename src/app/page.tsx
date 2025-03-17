'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { slides } from '@/config/slides';

const DNSPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>

        <div className="flex flex-col space-y-6">
          {slides[currentSlide].content}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              Previous
            </button>
            <div className="text-sm text-gray-500">
              {`Slide ${currentSlide + 1} of ${slides.length}`}
            </div>
            <button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              disabled={currentSlide === slides.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DNSPresentation;