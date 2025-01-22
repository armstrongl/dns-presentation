import React, { useState } from 'react';
import { Database, Info } from 'lucide-react';

interface DNSRecord {
  description: string;
  example: string;
  explanation: string;
}

interface DNSRecords {
  [key: string]: DNSRecord;
}

export const DNSRecordsExplorer = () => {
  const [selectedRecord, setSelectedRecord] = useState('A');

  const records: DNSRecords = {
    A: {
      description: "Maps a domain to an IPv4 address",
      example: "example.com.  IN  A  93.184.216.34",
      explanation: "Points your domain directly to a server's IP address"
    },
    AAAA: {
      description: "Maps a domain to an IPv6 address",
      example: "example.com.  IN  AAAA  2606:2800:220:1:248:1893:25c8:1946",
      explanation: "Similar to A record but for newer IPv6 addresses"
    },
    CNAME: {
      description: "Creates an alias for another domain name",
      example: "www.example.com.  IN  CNAME  example.com.",
      explanation: "Useful for subdomains that point to the same IP as main domain"
    },
    MX: {
      description: "Specifies mail servers for the domain",
      example: "example.com.  IN  MX  10  mail.example.com.",
      explanation: "Required for email delivery to your domain"
    },
    TXT: {
      description: "Holds text information",
      example: "example.com.  IN  TXT \"v=spf1 include:_spf.example.com ~all\"",
      explanation: "Often used for domain verification and email security"
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* <h2 className="text-2xl font-bold mb-8 text-center">DNS Records Explorer</h2> */}

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {Object.keys(records).map((recordType) => (
          <button
            key={recordType}
            onClick={() => setSelectedRecord(recordType)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              selectedRecord === recordType
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {recordType}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Database className="text-blue-500" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{selectedRecord} Record</h3>
            <p className="text-gray-600 mb-4">{records[selectedRecord].description}</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
              {records[selectedRecord].example}
            </div>

            <div className="flex items-start gap-2 text-gray-600">
              <Info size={20} className="mt-1 flex-shrink-0" />
              <p>{records[selectedRecord].explanation}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          Select different record types above to explore their purposes and formats.
        </p>
      </div>
    </div>
  );
};

export default DNSRecordsExplorer;