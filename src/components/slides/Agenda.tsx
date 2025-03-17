import React from 'react';
import { Database, Network, Server, Globe, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Agenda = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card className="border-ts-blue-100 shadow-sm bg-gradient-to-b from-white to-ts-blue-50">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-2xl font-semibold text-ts-grey-600">
            DNS and Tailscale
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          <p className="text-ts-grey-500 text-lg text-center px-8">
            From traditional DNS to Tailscale&apos;s modern approach
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-6">
            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-ts-blue-50 p-3 rounded-full mr-4">
                <Database className="w-6 h-6 text-ts-blue-300" />
              </div>
              <div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-ts-blue-300 mr-1" />
                  <h3 className="font-medium text-ts-grey-600">DNS Fundamentals</h3>
                </div>
                <p className="text-ts-grey-400 text-sm mt-1">Resolution process and limitations</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-ts-purple-50 p-3 rounded-full mr-4">
                <Network className="w-6 h-6 text-ts-purple-300" />
              </div>
              <div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-ts-purple-300 mr-1" />
                  <h3 className="font-medium text-ts-grey-600">Tailscale&apos;s Approach</h3>
                </div>
                <p className="text-ts-grey-400 text-sm mt-1">Push-based & local-first resolution</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-ts-green-50 p-3 rounded-full mr-4">
                <Server className="w-6 h-6 text-ts-green-300" />
              </div>
              <div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-ts-green-300 mr-1" />
                  <h3 className="font-medium text-ts-grey-600">Core Features</h3>
                </div>
                <p className="text-ts-grey-400 text-sm mt-1">MagicDNS, Quad100, Split DNS</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-ts-orange-50 p-3 rounded-full mr-4">
                <Globe className="w-6 h-6 text-ts-orange-300" />
              </div>
              <div>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-ts-orange-300 mr-1" />
                  <h3 className="font-medium text-ts-grey-600">Real-World Scenarios</h3>
                </div>
                <p className="text-ts-grey-400 text-sm mt-1">Corporate integration & exit nodes</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="inline-block border-2 border-ts-grey-200 rounded-full px-6 py-2 text-ts-grey-500">
              Followed by Q&A
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Agenda;