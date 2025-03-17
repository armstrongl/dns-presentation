import React, { useState } from 'react';
import { Server, Globe, FileText, Settings, ChevronDown } from 'lucide-react';

// Define interfaces for our component types
interface SectionItem {
  title: string;
  desc: string;
}

interface Section {
  title: string;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'purple' | 'orange';
  items: SectionItem[];
}

interface Components {
  [key: string]: Section;
}

interface ColorClasses {
  bg: string;
  border: string;
  text: string;
}

interface OpenSections {
  [key: string]: boolean;
}

export const DNSComponents = () => {
  const [openSections, setOpenSections] = useState<OpenSections>({
    domains: false,
    infrastructure: false,
    records: false,
    management: false
  });

  const toggleSection = (key: string): void => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const components: Components = {
    domains: {
      title: "Domain Names",
      icon: Globe,
      color: "blue",
      items: [
        { title: "TLDs", desc: ".com, .org, .net, .edu" },
        { title: "SLDs", desc: "example.com, google.com" },
        { title: "Subdomains", desc: "blog.example.com" },
        { title: "FQDNs", desc: "www.example.com" }
      ]
    },
    infrastructure: {
      title: "Infrastructure",
      icon: Server,
      color: "green",
      items: [
        { title: "Root Servers", desc: "13 root server systems worldwide" },
        { title: "TLD Servers", desc: "Manage top-level domains" },
        { title: "Authoritative Servers", desc: "Hold actual DNS records" },
        { title: "Recursive Resolvers", desc: "Process DNS queries" }
      ]
    },
    records: {
      title: "DNS Records",
      icon: FileText,
      color: "purple",
      items: [
        { title: "A Records", desc: "Map domain to IPv4" },
        { title: "AAAA Records", desc: "Map domain to IPv6" },
        { title: "CNAME", desc: "Create domain aliases" },
        { title: "MX", desc: "Specify mail servers" }
      ]
    },
    management: {
      title: "Management",
      icon: Settings,
      color: "orange",
      items: [
        { title: "Registrars", desc: "Sell and manage domains" },
        { title: "Registries", desc: "Maintain TLD databases" },
        { title: "DNS Providers", desc: "Host DNS records" },
        { title: "ICANN", desc: "Oversee domain system" }
      ]
    }
  };

  const colorClasses: Record<string, ColorClasses> = {
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800" },
    green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-800" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-800" }
  };

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-2xl font-bold text-center">Core Components of DNS</h2>

      <div className="grid grid-cols-2 gap-6">
        {Object.entries(components).map(([key, section]) => {
          const IconComponent = section.icon;
          const colors = colorClasses[section.color];

          return (
            <div key={key} className={`${colors.bg} border-2 ${colors.border} rounded-lg`}>
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full p-4 border-b-2 border-inherit"
              >
                <div className="flex items-center gap-3">
                  <IconComponent className={colors.text} />
                  <span className="font-semibold">{section.title}</span>
                </div>
                <ChevronDown className={`${colors.text} transition-transform duration-300 ${
                  openSections[key] ? 'rotate-180' : ''
                }`} />
              </button>

              <div className={`transition-all duration-300 ${
                openSections[key] ? 'max-h-[500px]' : 'max-h-0'
              } overflow-hidden`}>
                <div className="p-4 space-y-3">
                  {section.items.map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-4">How They Work Together</h3>
        <p className="text-sm text-gray-600">When you type a domain name in your browser:</p>
        <ol className="mt-2 space-y-2 text-sm text-gray-600">
          <li>1. Your computer asks a <span className="text-green-600">recursive resolver</span> to find the IP address</li>
          <li>2. The resolver checks with <span className="text-green-600">root servers</span> to find the right TLD server</li>
          <li>3. The <span className="text-orange-600">TLD registry</span> points to the authoritative nameservers</li>
          <li>4. The <span className="text-purple-600">DNS records</span> on the authoritative server provide the IP address</li>
          <li>5. Your browser can now connect to the website</li>
        </ol>
      </div>
    </div>
  );
};

export default DNSComponents;