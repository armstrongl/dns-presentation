'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Search, Server, Database, FileText, Settings, User, Network } from 'lucide-react';

const DNSPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Understanding DNS: The Internet's Contact List",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center">
              <Globe className="w-16 h-16 text-blue-500" />
              <p className="text-lg mt-2">example.com</p>
            </div>
            <div className="text-2xl">=</div>
            <div className="flex flex-col items-center">
              <Server className="w-16 h-16 text-green-500" />
              <p className="text-lg mt-2">192.0.2.1</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <p className="text-xl">DNS: Domain Name System</p>
            <p className="text-gray-600 mt-2">Like a contacts list that converts website names into IP addresses</p>
          </div>
        </div>
      )
    },
    {
      title: "Parts of the Domain Name System: Overview",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">Domain Names</h3>
            <ul className="space-y-2 text-sm">
              <li>• TLD (.com)</li>
              <li>• Domain (example)</li>
              <li>• Subdomain (www)</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-2">Infrastructure</h3>
            <ul className="space-y-2 text-sm">
              <li>• Registrars</li>
              <li>• Registry Operators</li>
              <li>• DNS Servers</li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold mb-2">Records</h3>
            <ul className="space-y-2 text-sm">
              <li>• A Records</li>
              <li>• CNAME</li>
              <li>• NS, MX, TXT</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Anatomy of a Domain Name",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="p-6 bg-white rounded-lg border-2 border-gray-200">
            <div className="flex items-center justify-center space-x-1">
              <div className="px-3 py-2 bg-blue-100 rounded">
                <p className="text-lg">blog</p>
                <p className="text-xs text-gray-600">subdomain</p>
              </div>
              <div className="text-xl">.</div>
              <div className="px-3 py-2 bg-green-100 rounded">
                <p className="text-lg">example</p>
                <p className="text-xs text-gray-600">domain</p>
              </div>
              <div className="text-xl">.</div>
              <div className="px-3 py-2 bg-orange-100 rounded">
                <p className="text-lg">com</p>
                <p className="text-xs text-gray-600">TLD</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <h3 className="font-bold mb-1">Top-level Domain</h3>
              <p className="text-sm">Generic: .com, .org, .net</p>
              <p className="text-sm">Country: .uk, .jp</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-1">Domain</h3>
              <p className="text-sm">Your unique identifier</p>
              <p className="text-sm">Second-level domain</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-1">Subdomain</h3>
              <p className="text-sm">Optional prefix</p>
              <p className="text-sm">e.g., www, blog, mail</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Registrars and Registry Operators",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2 flex items-center">
                <Server className="w-6 h-6 mr-2" />
                Registrars
              </h3>
              <ul className="space-y-2">
                <li>• Sell domain names</li>
                <li>• Manage domain registration</li>
                <li>• Examples: GoDaddy, Porkbun</li>
                <li>• Handle DNS configuration</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2 flex items-center">
                <Database className="w-6 h-6 mr-2" />
                Registry Operators
              </h3>
              <ul className="space-y-2">
                <li>• Manage TLD databases</li>
                <li>• VeriSign (.com, .net)</li>
                <li>• Public Interest (.org)</li>
                <li>• Maintain DNS records</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Registrants (You!)",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Domain Name Owner</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg">
                <h4 className="font-bold mb-2">Rights</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Control DNS settings</li>
                  <li>• Manage subdomains</li>
                  <li>• Transfer ownership</li>
                  <li>• Configure records</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <h4 className="font-bold mb-2">Responsibilities</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Keep contact info updated</li>
                  <li>• Renew registration</li>
                  <li>• Follow ICANN rules</li>
                  <li>• Maintain DNS records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "DNS Servers Hierarchy",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold mb-2">Root Servers</h3>
              <p className="text-sm">• 13 root server systems worldwide (a-m.root-servers.net)</p>
              <p className="text-sm">• Managed by 12 different organizations</p>
              <p className="text-sm">• Foundation of DNS hierarchy</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">TLD Servers</h3>
              <p className="text-sm">• Manage specific TLDs (.com, .org, etc.)</p>
              <p className="text-sm">• Operated by registry operators</p>
              <p className="text-sm">• Store NS records for domains</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2">Authoritative Name Servers</h3>
              <p className="text-sm">• Store actual DNS records</p>
              <p className="text-sm">• Managed by domain owners</p>
              <p className="text-sm">• Provide final IP addresses</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "DNS Records",
      content: (
        <div className="flex flex-col space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2 flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              A Record
            </h3>
            <p className="text-sm">Maps domain name to IPv4 address</p>
            <p className="text-xs bg-white p-2 rounded mt-2 font-mono">example.com → 192.0.2.1</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-2">CNAME Record</h3>
            <p className="text-sm">Creates an alias pointing to another domain</p>
            <p className="text-xs bg-white p-2 rounded mt-2 font-mono">www.example.com → example.com</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-bold">MX Record</h4>
              <p className="text-sm">Mail server settings</p>
              <p className="text-xs bg-white p-2 rounded mt-2 font-mono">@ → mail.example.com</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-bold">NS Record</h4>
              <p className="text-sm">Nameserver information</p>
              <p className="text-xs bg-white p-2 rounded mt-2 font-mono">ns1.registrar.com</p>
            </div>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-bold">TXT Record</h4>
            <p className="text-sm">Text information for various purposes:</p>
            <ul className="text-sm mt-2">
              <li>• SPF records for email</li>
              <li>• Domain verification</li>
              <li>• DKIM for email security</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Domain Registration Process",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-around p-4 bg-blue-50 rounded-lg">
            <div className="flex flex-col items-center">
              <Search className="w-12 h-12 text-blue-500" />
              <p className="text-sm mt-2">1. Choose Domain</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex flex-col items-center">
              <Server className="w-12 h-12 text-green-500" />
              <p className="text-sm mt-2">2. Register</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-purple-500" />
              <p className="text-sm mt-2">3. Configure</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">Step 1: Choose Domain</h3>
              <ul className="space-y-2 text-sm">
                <li>• Select available domain name</li>
                <li>• Pick appropriate TLD</li>
                <li>• Check pricing and terms</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">Step 2: Register Domain</h3>
              <ul className="space-y-2 text-sm">
                <li>• Choose registrar</li>
                <li>• Provide contact information</li>
                <li>• Complete purchase</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">Step 3: Configure DNS</h3>
              <ul className="space-y-2 text-sm">
                <li>• Set up DNS records</li>
                <li>• Configure nameservers</li>
                <li>• Verify settings</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How DNS Lookup Works",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <div className="flex justify-between items-center">
              <div className="text-center z-10">
                <Globe className="w-12 h-12 text-blue-500 mx-auto" />
                <p className="text-sm">Browser</p>
              </div>
              <div className="text-center z-10">
                <Database className="w-12 h-12 text-green-500 mx-auto" />
                <p className="text-sm">Cache</p>
              </div>
              <div className="text-center z-10">
                <Network className="w-12 h-12 text-purple-500 mx-auto" />
                <p className="text-sm">DNS Servers</p>
              </div>
              <div className="text-center z-10">
                <Server className="w-12 h-12 text-red-500 mx-auto" />
                <p className="text-sm">Website</p>
              </div>
            </div>
            <div className="absolute top-6 w-full h-0.5 bg-gray-200"></div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm">1. Type URL → Check local cache</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm">2. Query DNS servers if not cached</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="text-sm">3. Get IP address → Cache result</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <p className="text-sm">4. Connect to website</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Key Takeaways",
      content: (
        <div className="flex flex-col space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">DNS Purpose</h3>
            <p className="text-sm">Converts domain names to IP addresses</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold mb-2">Infrastructure</h3>
            <p className="text-sm">Registrars, operators, and servers work together</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold mb-2">Records</h3>
            <p className="text-sm">Different types for different purposes</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-bold mb-2">Process</h3>
            <p className="text-sm">Hierarchical lookup system with caching</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-sm text-gray-500">Slide {currentSlide + 1} of {slides.length}</p>
        </div>

        {slides[currentSlide].content}

        <div className="flex justify-between mt-8">
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
      </CardContent>
    </Card>
  );
};

export default DNSPresentation;