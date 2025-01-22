import React, { useState } from 'react';

const FQDNHierarchy = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      parts: [
        { text: "www", type: "subdomain" },
        { text: "example", type: "domain" },
        { text: "com", type: "tld" },
      ]
    },
    {
      parts: [
        { text: "blog", type: "subdomain" },
        { text: "google", type: "domain" },
        { text: "com", type: "tld" },
      ]
    },
    {
      parts: [
        { text: "docs", type: "subdomain" },
        { text: "tailscale", type: "domain" },
        { text: "com", type: "tld" },
      ]
    }
  ];

  const details = {
    tld: {
      title: "Top-level Domain (TLD)",
      examples: [
        "Generic: .com, .org, .net",
        "Country: .uk, .jp",
        "Problematic: .zip"
      ],
      bgColor: "bg-orange-50",
      labelBg: "bg-orange-100"
    },
    domain: {
      title: "Domain",
      examples: [
        "example, tailscale, google"
      ],
      bgColor: "bg-green-50",
      labelBg: "bg-green-100"
    },
    subdomain: {
      title: "Subdomain",
      examples: [
        "Optional prefix",
        "Examples: www., blog., docs."
      ],
      bgColor: "bg-blue-50",
      labelBg: "bg-blue-100"
    }
  };

  const handleNextExample = () => {
    setSelectedExample((prev) => (prev + 1) % examples.length);
  };

  return (
    <div className="flex flex-col space-y-6 max-w-4xl mx-auto p-6">
      {/* Domain Display */}
      <div className="p-6 bg-white rounded-lg border-2 border-gray-200">
        <div className="flex items-center justify-center space-x-1">
          {examples[selectedExample].parts.map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="text-xl">.</div>}
              <div className={`px-3 py-2 ${details[part.type].labelBg} rounded`}>
                <p className="text-lg">{part.text}</p>
                <p className="text-xs text-gray-600">{part.type}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
        {/* Example Switcher */}
        <div className="mt-4 text-center">
          <button
            onClick={handleNextExample}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
          >
            Next Example
          </button>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(details).map(([type, info]) => (
          <div key={type} className={`p-3 ${info.bgColor} rounded-lg`}>
            <h3 className="font-bold mb-1">{info.title}</h3>
            {info.examples.map((example, index) => (
              <p key={index} className="text-sm">{example}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FQDNHierarchy;