import React, { useState } from 'react';
import { Book, Globe, ArrowRight } from 'lucide-react';

export const DNSContacts = () => {
  const [hoveredPair, setHoveredPair] = useState<number | null>(null);

  const comparisons = [
    {
      contact: "Alice Smith",
      phone: "(555) 123-4567",
      website: "google.com",
      ip: "142.250.190.78"
    },
    {
      contact: "Bob Johnson",
      phone: "(555) 234-5678",
      website: "github.com",
      ip: "140.82.121.4"
    },
    {
      contact: "Carol Wilson",
      phone: "(555) 345-6789",
      website: "netflix.com",
      ip: "54.237.233.81"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        {/* <h2 className="text-2xl font-bold text-center mb-2">DNS: The Internet's Contact List</h2> */}
        <p className="text-center text-gray-600">
          DNS works like your phone's contact list, translating names into numbers
        </p>
      </div>

      {/* Comparison Headers */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Book className="text-blue-500" />
            <h3 className="font-semibold">Contact List</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Converts names to phone numbers
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Globe className="text-green-500" />
            <h3 className="font-semibold">DNS System</h3>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Converts domain names to IP addresses
          </p>
        </div>
      </div>

      {/* Comparison Rows */}
      <div className="space-y-4">
        {comparisons.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-8"
            onMouseEnter={() => setHoveredPair(index)}
            onMouseLeave={() => setHoveredPair(null)}
          >
            {/* Contact Side */}
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              hoveredPair === index ? 'bg-blue-50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.contact}</p>
                  <p className="text-sm text-gray-500 font-mono">{item.phone}</p>
                </div>
                {hoveredPair === index && (
                  <ArrowRight className="text-blue-500" />
                )}
              </div>
            </div>

            {/* DNS Side */}
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              hoveredPair === index ? 'bg-green-50' : 'bg-gray-50'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.website}</p>
                  <p className="text-sm text-gray-500 font-mono">{item.ip}</p>
                </div>
                {hoveredPair === index && (
                  <ArrowRight className="text-green-500" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Points */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Contact List</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Names are easy to remember</li>
            <li>• Each name maps to a unique number</li>
            <li>• Quick lookup in your saved contacts</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">DNS</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Domain names are easy to remember</li>
            <li>• Each domain maps to a unique IP</li>
            <li>• Quick lookup through DNS cache</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DNSContacts;