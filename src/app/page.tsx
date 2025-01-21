'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Search, Server, MessageCircle, AlertCircle, Home, Database, Clock, Link, Zap, Shield } from 'lucide-react';

const DNSMeetPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "DNS: Your Internet GPS",
      content: (
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-8">
            <Search className="w-16 h-16 text-blue-500" />
            <Globe className="w-16 h-16 text-green-500" />
          </div>
          <div className="text-xl text-center">
            "How does your computer find websites?"
          </div>
          <div className="bg-blue-100 p-4 rounded-lg w-full">
            💡 Chat Question: What website do you visit most often?
          </div>
        </div>
      )
    },
    {
      title: "The Problem DNS Solves",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-bold mb-2">Without DNS</h3>
              <div className="space-y-2">
                <p>❌ Remember IP addresses</p>
                <p>❌ Type numbers manually</p>
                <p>❌ Update when IPs change</p>
                <p className="mt-4 text-sm italic">Imagine memorizing phone numbers for every person you know!</p>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2">With DNS</h3>
              <div className="space-y-2">
                <p>✅ Use simple names</p>
                <p>✅ Automatic lookup</p>
                <p>✅ Always up to date</p>
                <p className="mt-4 text-sm italic">Like having a smart contact list that updates itself!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "DNS Step by Step",
      content: (
        <div className="flex flex-col space-y-8">
          <div className="relative">
            <div className="flex justify-between items-center">
              <div className="text-center z-10">
                <Home className="w-12 h-12 text-blue-500 mx-auto" />
                <p>Your Device</p>
              </div>
              <div className="text-center z-10">
                <Database className="w-12 h-12 text-purple-500 mx-auto" />
                <p>Local DNS</p>
              </div>
              <div className="text-center z-10">
                <Server className="w-12 h-12 text-green-500 mx-auto" />
                <p>Root DNS</p>
              </div>
              <div className="text-center z-10">
                <Globe className="w-12 h-12 text-red-500 mx-auto" />
                <p>Website</p>
              </div>
            </div>
            <div className="absolute top-6 w-full h-0.5 bg-gray-200"></div>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded">1. Your browser asks: "Where is google.com?"</div>
            <div className="p-3 bg-purple-50 rounded">2. Local DNS checks its memory</div>
            <div className="p-3 bg-green-50 rounded">3. If not found, asks root DNS servers</div>
            <div className="p-3 bg-red-50 rounded">4. Gets the address and connects you!</div>
          </div>
        </div>
      )
    },
    {
      title: "DNS Caching: Speed Boost!",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <Clock className="w-16 h-16 text-orange-500" />
              <h3 className="font-bold mt-2">First Visit</h3>
              <div className="p-4 bg-orange-50 rounded-lg mt-2 w-full">
                <p>1. Full DNS lookup</p>
                <p>2. Save to cache</p>
                <p>3. ~100-200ms</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-16 h-16 text-green-500" />
              <h3 className="font-bold mt-2">Return Visit</h3>
              <div className="p-4 bg-green-50 rounded-lg mt-2 w-full">
                <p>1. Check cache</p>
                <p>2. Instant lookup</p>
                <p>3. ~1ms</p>
              </div>
            </div>
          </div>
          <div className="text-sm bg-blue-100 p-4 rounded-lg">
            💡 Like remembering a friend's address after visiting once!
          </div>
        </div>
      )
    },
    {
      title: "DNS Security",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
                <p className="font-bold">Security Risks</p>
              </div>
              <ul className="space-y-2">
                <li>• DNS Spoofing</li>
                <li>• Cache Poisoning</li>
                <li>• Man-in-the-Middle</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield className="w-6 h-6 text-green-500 mr-2" />
                <p className="font-bold">Protections</p>
              </div>
              <ul className="space-y-2">
                <li>• DNSSEC</li>
                <li>• DNS over HTTPS</li>
                <li>• Regular Updates</li>
              </ul>
            </div>
          </div>
          <div className="text-sm bg-yellow-100 p-4 rounded-lg">
            🔒 Like having a secure phone directory that can't be tampered with!
          </div>
        </div>
      )
    },
    {
      title: "When DNS Goes Wrong",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center mb-2">
                <AlertCircle className="w-6 h-6 text-red-500 mr-2" />
                <p className="font-bold">Common Issues</p>
              </div>
              <ul className="space-y-2">
                <li>• DNS Server Down</li>
                <li>• Outdated Cache</li>
                <li>• Wrong DNS Settings</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-2">
                <MessageCircle className="w-6 h-6 text-green-500 mr-2" />
                <p className="font-bold">Quick Fixes</p>
              </div>
              <ul className="space-y-2">
                <li>• Clear Browser Cache</li>
                <li>• Check Connection</li>
                <li>• Try Different DNS</li>
              </ul>
            </div>
          </div>
          <div className="text-sm bg-blue-100 p-4 rounded-lg">
            ❓ Share in chat: What DNS issues have you encountered?
          </div>
        </div>
      )
    },
    {
      title: "Live Demo Time!",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-4">Let's Look Up Some Domains!</h3>
            <div className="space-y-4">
              <p>We'll use these commands:</p>
              <div className="bg-gray-800 text-white p-4 rounded font-mono">
                <p>nslookup google.com</p>
                <p>dig google.com</p>
              </div>
              <p className="text-sm italic">Watch as we see DNS in action!</p>
            </div>
          </div>
          <div className="text-sm bg-yellow-100 p-4 rounded-lg">
            🔍 What website should we look up together?
          </div>
        </div>
      )
    },
    {
      title: "Key Takeaways",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-bold">1. DNS is like a phone book</p>
              <p className="text-sm">Converts names to numbers</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="font-bold">2. It's hierarchical</p>
              <p className="text-sm">Works like a tree of servers</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="font-bold">3. Caching speeds things up</p>
              <p className="text-sm">Remember previous lookups</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="font-bold">4. Security is important</p>
              <p className="text-sm">Protection against attacks</p>
            </div>
          </div>
          <div className="text-sm bg-blue-100 p-4 rounded-lg">
            🎯 Questions? Drop them in the chat!
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

export default DNSMeetPresentation;