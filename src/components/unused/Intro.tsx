import React, { useState } from 'react';
import { Globe, Server, ArrowRight, Phone, Database, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Main Card */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">DNS: Domain Name System</CardTitle>
          <CardDescription>The Internet&apos;s Directory Service</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Interactive DNS Translation */}
          <div
            className="flex items-center justify-center space-x-8 p-8 bg-gradient-to-r from-ts-blue-50 to-ts-green-50 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={rotateExample}
          >
            <div className="flex flex-col items-center transform transition-transform hover:scale-105">
              <Globe className="w-16 h-16 text-ts-blue-300" />
              <p className="text-lg mt-2 font-medium">{examples[currentExample].domain}</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <ArrowRight className={`w-8 h-8 text-ts-blue-300/70 transform transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              <p className="text-sm text-ts-blue-300/70 font-medium">DNS</p>
            </div>

            <div className="flex flex-col items-center transform transition-transform hover:scale-105">
              <Server className="w-16 h-16 text-ts-green-300" />
              <p className="text-lg mt-2 font-mono">{examples[currentExample].ip}</p>
            </div>
          </div>

          {/* Explanation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-ts-blue-50 border-ts-blue-100">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-ts-blue-100 rounded-lg">
                    <Globe className="w-6 h-6 text-ts-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ts-blue-500 mb-1">Domain Names</h3>
                    <p className="text-sm text-ts-grey-400">Human-readable website addresses that are easy to remember and share</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-ts-green-50 border-ts-green-100">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-ts-green-100 rounded-lg">
                    <Database className="w-6 h-6 text-ts-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ts-green-500 mb-1">IP Addresses</h3>
                    <p className="text-sm text-ts-grey-400">Numerical identifiers that computers use to locate servers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analogy Alert */}
          <Alert className="bg-ts-grey-50 border-ts-grey-100">
            <Phone className="w-4 h-4 text-ts-orange-300" />
            <AlertDescription className="text-ts-grey-500">
              Think of DNS as a phone book that converts contact names into phone numbers, but for the internet!
            </AlertDescription>
          </Alert>

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