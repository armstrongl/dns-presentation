'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Clock, History, Server, Database, Settings, Network } from 'lucide-react';
import { DNSExplainer } from '@/components/dns/DnsLookupProcess';
import { DNSRecordsExplorer } from '@/components/dns/RecordsExplorer';
import DNAnatomy from "@/components/dns/DomainNameAnatomy";
import DNSContacts from "@/components/dns/ContactList";
import DNSIntro from "@/components/dns/Intro";
import MagicDNSExplainer from "@/components/dns/TailscaleMagicDnsSplit";
import { Intro } from "@/components/dns/Intro";
import { DnsLookupProcess } from "@/components/dns/DnsLookupProcess";
import { TailscaleMagicDnsSplit } from "@/components/dns/TailscaleMagicDnsSplit";
import { DomainNameAnatomy } from "@/components/dns/DomainNameAnatomy";
import { CoreComponents } from "@/components/dns/CoreComponents";
import { RecursiveResolver } from "@/components/dns/RecursiveResolver";
import { RecordsExplorer } from "@/components/dns/RecordsExplorer";
import { ContactList } from "@/components/dns/ContactList";
import { MagicDNSVisualization } from "@/components/tailscale/MagicDNSVisualization";
import { Quad100Hub } from "@/components/tailscale/Quad100Hub";
import { SplitDNSVisualization } from "@/components/tailscale/SplitDNSVisualization";
import { ExitNodeDNSFlow } from "@/components/tailscale/ExitNodeDNSFlow";
import { KeyTakeaways } from "@/components/tailscale/KeyTakeaways";

const DNSPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Understanding DNS",
      content: (
        <div className="flex flex-col space-y-6">
          <DNSIntro />
        </div>
      )
    },
    {
      title: "Understanding DNS: The Internet's Contact List",
      content: (
        <div className="flex flex-col space-y-6">
          <DNSContacts />
        </div>
      )
    },
    {
      title: "Parts of the Domain Name System: Overview",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-ts-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">Domain Names</h3>
            <ul className="space-y-2 text-sm text-ts-grey-400">
              <li>• Top-level Domain (TLD)</li>
              <li>• Domain</li>
              <li>• Subdomain</li>
            </ul>
          </div>
          <div className="p-4 bg-ts-green-50 rounded-lg">
            <h3 className="font-bold mb-2">Infrastructure</h3>
            <ul className="space-y-2 text-sm text-ts-grey-400">
              <li>• Registrars</li>
              <li>• Registry Operators</li>
              <li>• DNS Servers</li>
            </ul>
          </div>
          <div className="p-4 bg-ts-purple-50 rounded-lg">
            <h3 className="font-bold mb-2">Records</h3>
            <ul className="space-y-2 text-sm text-ts-grey-400">
              <li>• A & AAAA Records</li>
              <li>• CNAME Records</li>
              <li>• NS Records</li>
              <li>• Other Records (MX, TXT)</li>
            </ul>
          </div>
        </div>
      )
    },

    {
      title: "Anatomy of a Domain Name",
      content: (
        <div className="flex flex-col space-y-6">
          <DNAnatomy />
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
                <li>• Handle DNS configuration</li>
                <li>• Examples: GoDaddy, Porkbun</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2 flex items-center">
                <Database className="w-6 h-6 mr-2" />
                Registry Operators
              </h3>
              <ul className="space-y-2">
                <li>• Manage TLD databases</li>

                <li>• Propagate DNS settings</li>
                <li>• Maintain DNS records</li>
                <li>• Examples: VeriSign (.com, .net), Public Interest (.org)</li>
              </ul>
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
              <h3 className="font-bold mb-2">Root Name Servers</h3>
              <p className="text-sm">• 13 root server systems worldwide</p>
              <p className="text-sm">• Managed by 12 different organizations</p>
              <p className="text-sm">• Foundation of DNS hierarchy</p>
              <p className="text-sm">• Returns TLD name server</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">TLD Name Servers</h3>
              <p className="text-sm">• Manage specific TLDs (.com, .org, etc.)</p>
              <p className="text-sm">• Operated by registry operators</p>
              <p className="text-sm">• Store NS records for domains</p>
              <p className="text-sm">• Returns authoritative name server</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2">Authoritative Name Servers</h3>
              <p className="text-sm">• Store actual DNS records</p>
              <p className="text-sm">• Managed by domain owners</p>
              <p className="text-sm">• Returns final IP addresses</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "DNS Records",
      content: (
        <div className="flex flex-col space-y-4">
          <DNSRecordsExplorer />
        </div>
      )
    },
    {
      title: "History of DNS",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-ts-orange-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="w-6 h-6 text-ts-orange-300 mr-2" />
                <h3 className="font-bold">Early Days (1970s)</h3>
              </div>
              <ul className="space-y-2 text-sm text-ts-grey-400">
                <li>• ARPANET used HOSTS.TXT file</li>
                <li>• Single file maintained at Stanford</li>
                <li>• Manual updates and downloads</li>
                <li>• Limited scalability</li>
              </ul>
            </div>
            <div className="p-4 bg-ts-blue-50 rounded-lg">
              <div className="flex items-center mb-2">
                <History className="w-6 h-6 text-ts-blue-300 mr-2" />
                <h3 className="font-bold">DNS Creation (1983)</h3>
              </div>
              <ul className="space-y-2 text-sm text-ts-grey-400">
                <li>• Paul Mockapetris designs DNS</li>
                <li>• Introduced distributed database</li>
                <li>• Hierarchical naming system</li>
                <li>• Automated name resolution</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-ts-green-50 rounded-lg">
            <h3 className="font-bold mb-2">Key Developments</h3>
            <div className="grid grid-cols-3 gap-4 text-sm text-ts-grey-400">
              <div>
                <p className="font-semibold">1984-1985</p>
                <ul className="mt-1">
                  <li>• First DNS server (named "Jeeves")</li>
                  <li>• DNS fully implemented with the BIND package</li>
                  <li>• .com TLD created</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">1990s</p>
                <ul className="mt-1">
                  <li>• World Wide Web boom</li>
                  <li>• DNS commercialization</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">2000s-Present</p>
                <ul className="mt-1">
                  <li>• DNSSEC 🌶</li>
                  <li>• New TLDs introduced</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 bg-ts-purple-50 rounded-lg">
            <h3 className="font-bold mb-2">Impact and Legacy</h3>
            <ul className="space-y-2 text-sm text-ts-grey-400">
              <li>• Enabled internet scalability (kind of)</li>
              <li>• Foundation for modern web</li>
              <li>• Still uses same core principles</li>
              <li>• Continues to evolve and be used in ways that were never intended</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Domain Registration Process",
      content: (
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-around p-4 bg-ts-blue-50 rounded-lg">
            <div className="flex flex-col items-center">
              <Server className="w-12 h-12 text-ts-blue-300" />
              <p className="text-sm mt-2 text-ts-grey-400">1. Register</p>
            </div>
            <div className="text-2xl text-ts-grey-400">→</div>
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-ts-green-300" />
              <p className="text-sm mt-2 text-ts-grey-400">2. Configure</p>
            </div>
            <div className="text-2xl text-ts-grey-400">→</div>
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-ts-purple-300" />
              <p className="text-sm mt-2 text-ts-grey-400">3. Propagate</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-ts-blue-50 rounded-lg">
              <h3 className="font-bold mb-2 text-ts-blue-300">Step 1: Register with Registrar</h3>
              <ul className="space-y-2 text-sm text-ts-grey-400">
                <li>• Choose a registrar (GoDaddy, Porkbun)</li>
                <li>• Purchase domain name</li>
                <li>• Provide contact information</li>
              </ul>
            </div>
            <div className="p-4 bg-ts-green-50 rounded-lg">
              <h3 className="font-bold mb-2 text-ts-green-300">Step 2: Configure DNS Settings</h3>
              <ul className="space-y-2 text-sm text-ts-grey-400">
                <li>• Set up A/AAAA records (IP addresses)</li>
                <li>• Configure CNAME records (aliases)</li>
                <li>• Set NS records (nameservers)</li>
              </ul>
            </div>
            <div className="p-4 bg-ts-purple-50 rounded-lg">
              <h3 className="font-bold mb-2 text-ts-purple-300">Step 3: Registry Propagation</h3>
              <ul className="space-y-2 text-sm text-ts-grey-400">
                <li>• Registry operator updates records</li>
                <li>• Changes propagate through DNS</li>
                <li>• Can take up to 48 hours</li>
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
                <Globe className="w-12 h-12 text-ts-blue-300 mx-auto" />
                <p className="text-sm text-ts-grey-400">Browser</p>
              </div>
              <div className="text-center z-10">
                <Database className="w-12 h-12 text-ts-green-300 mx-auto" />
                <p className="text-sm text-ts-grey-400">Cache</p>
              </div>
              <div className="text-center z-10">
                <Network className="w-12 h-12 text-ts-purple-300 mx-auto" />
                <p className="text-sm text-ts-grey-400">DNS Resolver</p>
              </div>
              <div className="text-center z-10">
                <Server className="w-12 h-12 text-ts-red-300 mx-auto" />
                <p className="text-sm text-ts-grey-400">Website</p>
              </div>
            </div>
            <div className="absolute top-6 w-full h-0.5 bg-ts-grey-200"></div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-ts-blue-50 rounded-lg">
              <p className="text-sm font-semibold text-ts-blue-300">1. Type URL into Browser</p>
              <p className="text-xs text-ts-grey-400 mt-1">Browser first checks local DNS cache</p>
              <p className="text-xs text-ts-grey-400 mt-1">If not in cache, start recursive DNS resolution</p>
            </div>
            <div className="p-3 bg-ts-purple-50 rounded-lg">
              <p className="text-sm font-semibold text-ts-purple-300">2. Recursive DNS Resolution</p>
              <p className="text-xs text-ts-grey-400 mt-1">The Recursive DNS Resolver Server starts working through the DNS server hierarchy</p>
              <p className="text-xs text-ts-grey-400 mt-1">Also called the public DNS resolver (a well known one is Google's DNS at 8.8.8.8)</p>
              <div className="ml-4 mt-2 space-y-2">
                <div className="p-3 bg-ts-purple-50 rounded-lg">
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 bg-ts-purple-300 rounded-full mr-2"></div>
                    Ask Root Server: "Who knows about .com?"
                    → Returns TLD Name Server (.com)
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 bg-ts-purple-300 rounded-full mr-2"></div>
                    Ask TLD Name Server: "Who knows about example.com?"
                    → Returns Authoritative Name Server
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 bg-ts-purple-300 rounded-full mr-2"></div>
                    Ask Authoritative Server: "What's example.com's IP?"
                    → Returns IP address
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 bg-ts-purple-300 rounded-full mr-2"></div>
                    Get IP Address: 192.0.2.1
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-ts-green-50 rounded-lg">
              <p className="text-sm font-semibold text-ts-green-300">3. Cache the Result</p>
              <p className="text-xs text-ts-grey-400 mt-1">Store IP address of the URL locally for future requests</p>
            </div>
            <div className="p-3 bg-ts-red-50 rounded-lg">
              <p className="text-sm font-semibold text-ts-red-300">4. Connect to Website</p>
              <p className="text-xs text-ts-grey-400 mt-1">Browser uses IP address to access the website</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "DNS Lookup Process",
      content: (
        <div className="flex flex-col space-y-4">
          <DNSExplainer />
        </div>
      )
    },
    {
      title: "MagicDNS Lookup Process",
      content: (
        <div className="flex flex-col space-y-6">
          <MagicDNSExplainer />
        </div>
      )
    },
    {
      title: "Summary",
      content: (
        <div className="flex flex-col space-y-4">
          <div className="p-4 bg-ts-blue-50 rounded-lg">
            <h3 className="font-bold mb-2 text-ts-blue-300">How DNS Works</h3>
            <p className="text-sm text-ts-grey-400">It's like a contacts list for the internet. So you don't have to memorize IP addresses</p>
          </div>
          <div className="p-4 bg-ts-green-50 rounded-lg">
            <h3 className="font-bold mb-2 text-ts-green-300">Parts of the Domain Name System</h3>
            <p className="text-sm text-ts-grey-400">• Domain names: subdomain.domain.TLD</p>
            <p className="text-sm text-ts-grey-400">• Infrastructure: Registrars, Registry Operators, Registrants, DNS Servers</p>
            <p className="text-sm text-ts-grey-400">• Records: A, CNAME, NS</p>
          </div>
          <div className="p-4 bg-ts-orange-50 rounded-lg">
            <h3 className="font-bold mb-2 text-ts-orange-300">History</h3>
            <p className="text-sm text-ts-grey-400">• HOSTS.TXT</p>
            <p className="text-sm text-ts-grey-400">• "Jeeves"</p>
            <p className="text-sm text-ts-grey-400">• BIND package</p>
            <p className="text-sm text-ts-grey-400">• DNS today</p>
          </div>
          <div className="p-4 bg-ts-purple-50 rounded-lg">
            <h3 className="font-bold mb-2 text-ts-purple-300">DNS Lookup</h3>
            <p className="text-sm text-ts-grey-400">• Type domain name into browser</p>
            <p className="text-sm text-ts-grey-400">• Check local cache</p>
            <p className="text-sm text-ts-grey-400">• Recursive DNS resolution</p>
            <p className="text-sm text-ts-grey-400">• Cache IP address</p>
            <p className="text-sm text-ts-grey-400">• Use IP address to access website</p>
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