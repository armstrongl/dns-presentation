import React, { useState } from 'react';
import { Globe, Server, ArrowRight, Database, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const DNSModernExplainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const examples = [
    { domain: 'example.com', ip: '192.0.2.1' },
    { domain: 'google.com', ip: '172.217.0.46' },
    { domain: 'github.com', ip: '140.82.121.4' }
  ];
  const [currentExample, setCurrentExample] = useState(0);

  const rotateExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
  };

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8">
      <Card className="border-ts-blue-100 shadow-sm bg-gradient-to-b from-white to-ts-blue-50">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-xl sm:text-2xl font-semibold text-ts-grey-600">
            What is DNS?
          </CardTitle>
          <CardDescription className="text-sm text-ts-grey-500">
            The Domain Name System
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Interactive DNS Translation */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 p-4 sm:p-6 bg-gradient-to-r from-ts-blue-50 to-ts-green-50 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={rotateExample}
          >
            <div className="flex flex-col items-center transform transition-transform hover:scale-105">
              <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-ts-blue-300" />
              <p className="text-base sm:text-lg mt-2 font-medium">{examples[currentExample].domain}</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <ArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 text-ts-blue-300/70 transform transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              <p className="text-sm text-ts-blue-300/70 font-medium">DNS</p>
            </div>

            <div className="flex flex-col items-center transform transition-transform hover:scale-105">
              <Server className="w-12 h-12 sm:w-16 sm:h-16 text-ts-green-300" />
              <p className="text-base sm:text-lg mt-2 font-mono">{examples[currentExample].ip}</p>
            </div>
          </div>

          {/* Explanation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-ts-blue-50 p-3 rounded-full mr-4">
                <Globe className="w-6 h-6 text-ts-blue-300" />
              </div>
              <div>
                <h3 className="font-medium text-ts-grey-600">Domain Names</h3>
                <p className="text-ts-grey-400 text-sm mt-1">Human-readable website addresses that are easy to remember and share</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-ts-green-50 p-3 rounded-full mr-4">
                <Database className="w-6 h-6 text-ts-green-300" />
              </div>
              <div>
                <h3 className="font-medium text-ts-grey-600">IP Addresses</h3>
                <p className="text-ts-grey-400 text-sm mt-1">Numerical identifiers that computers use to locate servers</p>
              </div>
            </div>
          </div>

          {/* Interactive Hint */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              className="text-sm text-ts-grey-400 hover:text-ts-grey-500"
              onClick={rotateExample}
            >
              View more examples
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DNSModernExplainer;