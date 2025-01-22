'use client'

import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Search,
  Server,
  BookOpen,
  Map,
  AlertCircle,
  RefreshCw,
  Coffee
} from 'lucide-react';

// Define our own icon component type
type IconComponent = React.FC<{
  className?: string;
  size?: number;
  color?: string;
}>;

interface ModernSlideProps {
  children: React.ReactNode;
  className?: string;
}

interface IconCardProps {
  icon: IconComponent;
  text: string;
  className?: string;
}

interface Slide {
  content: React.ReactNode;
}

const ModernSlide: React.FC<ModernSlideProps> = ({ children, className = "" }) => (
  <div className={`flex flex-col items-center justify-center w-full h-full p-8 ${className}`}>
    {children}
  </div>
);

const IconCard: React.FC<IconCardProps> = ({ icon: Icon, text, className = "" }) => (
  <Card className={`p-6 flex flex-col items-center justify-center transition-all hover:scale-105 ${className}`}>
    <Icon className="w-12 h-12 mb-4" />
    <div className="text-center text-sm">{text}</div>
  </Card>
);

const DNSPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: Slide[] = [
    // Slide 1: Title
    {
      content: (
        <ModernSlide>
          <div className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DNS Explained
          </div>
          <div className="text-2xl text-gray-600 mb-12">
            The Internet's Phone Book
          </div>
          <div className="grid grid-cols-3 gap-8">
            <IconCard icon={Globe} text="Easy Names" />
            <IconCard icon={Search} text="Quick Lookup" />
            <IconCard icon={Server} text="Always Working" />
          </div>
        </ModernSlide>
      )
    },

    // Slide 2: The Problem
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-8">The Internet's Big Problem</div>
          <div className="grid grid-cols-2 gap-12 mb-8">
            <Card className="p-8 bg-gray-50">
              <div className="text-xl mb-4">Computers Like:</div>
              <div className="font-mono text-lg">142.251.16.100</div>
            </Card>
            <Card className="p-8 bg-gray-50">
              <div className="text-xl mb-4">Humans Like:</div>
              <div className="text-lg">google.com</div>
            </Card>
          </div>
          <div className="text-xl text-gray-600">
            How do we make both happy? 🤔
          </div>
        </ModernSlide>
      )
    },

    // Slide 3: The Solution
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-12">Enter DNS: The Translator</div>
          <div className="flex items-center justify-center space-x-6">
            <Card className="p-6 bg-blue-50">
              <div className="text-xl">google.com</div>
            </Card>
            <div className="flex flex-col items-center">
              <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
              <div className="text-sm mt-2">DNS Magic</div>
            </div>
            <Card className="p-6 bg-green-50">
              <div className="font-mono text-xl">142.251.16.100</div>
            </Card>
          </div>
        </ModernSlide>
      )
    },

    // Slide 4: Phone Book Analogy
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-8">Just Like a Phone Book!</div>
          <div className="grid grid-cols-2 gap-12 w-full max-w-3xl">
            <Card className="p-8 bg-yellow-50">
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
                <div className="text-lg mb-2">Phone Book</div>
                <div className="text-sm text-gray-600">
                  Name → Phone Number
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-blue-50">
              <div className="text-center">
                <Server className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <div className="text-lg mb-2">DNS</div>
                <div className="text-sm text-gray-600">
                  Website → IP Address
                </div>
              </div>
            </Card>
          </div>
        </ModernSlide>
      )
    },

    // Slide 5: How It Works
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-12">How DNS Works</div>
          <div className="flex items-center justify-center space-x-4">
            <IconCard icon={Globe} text="You type google.com" />
            <ChevronRight className="w-6 h-6" />
            <IconCard icon={Search} text="DNS looks it up" />
            <ChevronRight className="w-6 h-6" />
            <IconCard icon={Map} text="Finds the address" />
            <ChevronRight className="w-6 h-6" />
            <IconCard icon={Coffee} text="You get your website!" />
          </div>
        </ModernSlide>
      )
    },

    // Slide 6: DNS Problems
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-8">When DNS Gets Confused</div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-red-50">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-lg mb-2">"Website Not Found"</div>
                <div className="text-sm text-gray-600">
                  The phone book is lost!
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-green-50">
              <div className="text-center">
                <RefreshCw className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-lg mb-2">Quick Fix</div>
                <div className="text-sm text-gray-600">
                  Just try again in a minute!
                </div>
              </div>
            </Card>
          </div>
        </ModernSlide>
      )
    },

    // Slide 7: Why It Matters
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-8">Why DNS Matters</div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <div className="text-sm">
                  Easy to Remember Names
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡️</div>
                <div className="text-sm">
                  Super Fast Loading
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <div className="text-sm">
                  Always Up to Date
                </div>
              </div>
            </Card>
          </div>
        </ModernSlide>
      )
    },

    // Slide 8: Summary
    {
      content: (
        <ModernSlide>
          <div className="text-3xl font-bold mb-8">Remember...</div>
          <div className="space-y-6 text-xl max-w-2xl text-center">
            <Card className="p-4 bg-blue-50">
              DNS is like a magical phone book for the internet
            </Card>
            <Card className="p-4 bg-green-50">
              It turns website names into computer addresses
            </Card>
            <Card className="p-4 bg-yellow-50">
              Without it, we'd have to remember long numbers!
            </Card>
          </div>
        </ModernSlide>
      )
    }
  ];

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = (): void => {
    if (currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const previousSlide = (): void => {
    if (currentSlide > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <Card className="max-w-5xl mx-auto p-8 shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={previousSlide}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full p-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="w-12 h-12 rounded-full p-0"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {slides[currentSlide].content}
        </div>
      </Card>
    </div>
  );
};

export default DNSPresentation;