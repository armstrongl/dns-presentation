import React, { useState } from 'react';
import { Database, Info } from 'lucide-react';

interface DNSRecord {
  description: string;
  example: string;
  explanation: string;
  colorClass: string;
  iconColorClass: string;
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
      explanation: "Points your domain directly to a server's IP address",
      colorClass: "bg-ts-blue-50",
      iconColorClass: "text-ts-blue-300"
    },
    AAAA: {
      description: "Maps a domain to an IPv6 address",
      example: "example.com.  IN  AAAA  2606:2800:220:1:248:1893:25c8:1946",
      explanation: "Similar to A record but for newer IPv6 addresses",
      colorClass: "bg-ts-green-50",
      iconColorClass: "text-ts-green-300"
    },
    CNAME: {
      description: "Creates an alias for another domain name",
      example: "www.example.com.  IN  CNAME  example.com.",
      explanation: "Useful for subdomains that point to the same IP as main domain",
      colorClass: "bg-ts-orange-50",
      iconColorClass: "text-ts-orange-300"
    },
    MX: {
      description: "Specifies mail servers for the domain",
      example: "example.com.  IN  MX  10  mail.example.com.",
      explanation: "Required for email delivery to your domain",
      colorClass: "bg-ts-purple-50",
      iconColorClass: "text-ts-purple-300"
    },
    TXT: {
      description: "Holds text information",
      example: "example.com.  IN  TXT \"v=spf1 include:_spf.example.com ~all\"",
      explanation: "Often used for domain verification and email security",
      colorClass: "bg-ts-red-50",
      iconColorClass: "text-ts-red-300"
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-ts-grey-800">DNS Record Types Explorer</h2>

      {/* Mobile Design */}
      <div className="block sm:hidden">
        {/* Vertical Button Stack */}
        <div className="space-y-2 mb-6">
          {Object.keys(records).map((recordType) => (
            <button
              key={recordType}
              onClick={() => setSelectedRecord(recordType)}
              className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors text-left ${
                selectedRecord === recordType
                  ? `${records[recordType].colorClass} ${records[recordType].iconColorClass}`
                  : 'bg-ts-grey-100 hover:bg-ts-grey-200'
              }`}
            >
              {recordType} Record
            </button>
          ))}
        </div>

        {/* Record Details */}
        <div className={`${records[selectedRecord].colorClass} rounded-lg p-4`}>
          <div className="flex items-center gap-3 mb-3">
            <Database className={records[selectedRecord].iconColorClass} size={24} />
            <h3 className="text-lg font-semibold">{selectedRecord} Record</h3>
          </div>
          <p className="text-ts-grey-400 text-sm mb-4">{records[selectedRecord].description}</p>

          <div className="bg-ts-grey-50 p-3 rounded-lg mb-4 font-mono text-xs overflow-x-auto">
            {records[selectedRecord].example}
          </div>

          <div className="flex items-start gap-2 text-ts-grey-400 text-sm">
            <Info size={16} className="mt-1 flex-shrink-0" />
            <p>{records[selectedRecord].explanation}</p>
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden sm:block">
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {Object.keys(records).map((recordType) => (
            <button
              key={recordType}
              onClick={() => setSelectedRecord(recordType)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedRecord === recordType
                  ? `${records[recordType].colorClass} ${records[recordType].iconColorClass}`
                  : 'bg-ts-grey-100 hover:bg-ts-grey-200'
              }`}
            >
              {recordType}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${records[selectedRecord].colorClass}`}>
              <Database className={records[selectedRecord].iconColorClass} size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{selectedRecord} Record</h3>
              <p className="text-ts-grey-400 mb-4">{records[selectedRecord].description}</p>

              <div className="bg-ts-grey-50 p-4 rounded-lg mb-4 font-mono text-sm">
                {records[selectedRecord].example}
              </div>

              <div className="flex items-start gap-2 text-ts-grey-400">
                <Info size={20} className="mt-1 flex-shrink-0" />
                <p>{records[selectedRecord].explanation}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-6 ${records[selectedRecord].colorClass} p-4 rounded-lg`}>
          <p className={`text-sm ${records[selectedRecord].iconColorClass}`}>
            Select different record types above to explore their purposes and formats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DNSRecordsExplorer;