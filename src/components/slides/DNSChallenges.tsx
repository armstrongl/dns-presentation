import React, { useState } from 'react';
import {
  Clock,
  RefreshCcw,
  Lock,
  AlertTriangle,
  Server,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const TraditionalDNSChallenges = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);

  const challenges = [
    {
      id: 'propagation',
      title: 'Slow Propagation',
      description: 'DNS changes can take hours or days to spread across the internet.',
      icon: Clock,
      color: 'ts-orange-300',
      bgColor: 'ts-orange-50',
      visual: (
        <div className="flex items-center justify-between mt-6 px-4">
          <Server size={24} className="text-ts-grey-500" />
          <div className="flex-1 mx-4">
            <div className="h-1 w-full bg-ts-orange-100 relative">
              <div className="absolute left-0 top-0 h-1 bg-ts-orange-300 w-1/4 animate-[grow_4s_ease-out_infinite]"></div>
            </div>
            <div className="text-xs text-ts-grey-500 mt-2 text-center">Hours or days to propagate...</div>
          </div>
          <Server size={24} className="text-ts-grey-500" />
        </div>
      )
    },
    {
      id: 'caching',
      title: 'Inconsistent Caching',
      description: 'Different TTL values create inconsistencies between DNS resolvers.',
      icon: RefreshCcw,
      color: 'ts-blue-300',
      bgColor: 'ts-blue-50',
      visual: (
        <div className="flex justify-between mt-6 px-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`p-3 rounded-lg ${i === 2 ? 'bg-ts-blue-100' : 'bg-ts-grey-100'} text-center`}>
              <div className="text-xs text-ts-grey-600">Cache {i}</div>
              <div className={`text-sm font-medium ${i === 2 ? 'text-ts-blue-400' : 'text-ts-grey-400'}`}>
                {i === 2 ? 'Updated' : 'Stale'}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'encryption',
      title: 'No Built-in Encryption',
      description: 'Traditional DNS queries are sent as plaintext, visible to network observers.',
      icon: Lock,
      color: 'ts-red-300',
      bgColor: 'ts-red-50',
      visual: (
        <div className="relative mt-6 px-8">
          <div className="flex justify-between items-center">
            <div className="p-2 rounded-lg bg-ts-grey-100">
              <div className="text-xs">Client</div>
            </div>
            <div className="flex-1 mx-4 text-center">
              <div className="inline-block bg-ts-red-100 p-1 rounded text-xs text-ts-red-400 animate-pulse">
                plaintext: &quot;example.com?&quot;
              </div>
              <div className="mt-4 text-ts-red-300 flex items-center justify-center">
                <AlertTriangle size={16} />
                <span className="text-xs ml-1">Visible to observers</span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-ts-grey-100">
              <div className="text-xs">DNS Server</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'recursive',
      title: 'Multiple Recursive Lookups',
      description: 'Each DNS query often requires multiple lookups, adding latency.',
      icon: Server,
      color: 'ts-purple-300',
      bgColor: 'ts-purple-50',
      visual: (
        <div className="mt-6 px-4">
          <div className="flex items-center">
            <div className="p-2 rounded-lg bg-ts-grey-100 text-xs text-center">
              Client
            </div>

            <div className="flex-1 flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-3 mt-2">
                <div className="h-px w-full bg-ts-grey-200 relative">
                  <div className="absolute left-0 h-3 w-3 rounded-full bg-ts-purple-300 animate-[queryStep1_6s_linear_infinite]"></div>
                  <div className="absolute right-0 h-3 w-3 rounded-full bg-ts-purple-300 animate-[responseStep1_6s_linear_infinite]"></div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center mb-3">
                <div className="h-px w-full bg-ts-grey-200 relative">
                  <div className="absolute left-0 h-3 w-3 rounded-full bg-ts-purple-300 animate-[queryStep2_6s_linear_infinite]"></div>
                  <div className="absolute right-0 h-3 w-3 rounded-full bg-ts-purple-300 animate-[responseStep2_6s_linear_infinite]"></div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="h-px w-full bg-ts-grey-200 relative">
                  <div className="absolute left-0 h-3 w-3 rounded-full bg-ts-purple-300 animate-[queryStep3_6s_linear_infinite]"></div>
                  <div className="absolute right-0 h-3 w-3 rounded-full bg-ts-purple-300 animate-[responseStep3_6s_linear_infinite]"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full gap-2">
              <div className="p-2 rounded-lg bg-ts-grey-100 text-xs text-center whitespace-nowrap">
                Root Server
              </div>
              <div className="p-2 rounded-lg bg-ts-grey-100 text-xs text-center whitespace-nowrap">
                TLD Server
              </div>
              <div className="p-2 rounded-lg bg-ts-grey-100 text-xs text-center whitespace-nowrap">
                Auth Server
              </div>
            </div>
          </div>

          <div className="text-xs text-center mt-4 text-ts-grey-500">
            Multiple round trips add 50-100ms per lookup
          </div>
        </div>
      )
    },
  ];

  const currentChallenge = challenges[activeChallenge];

  const nextChallenge = () => {
    setActiveChallenge((prev) => (prev + 1) % challenges.length);
  };

  const prevChallenge = () => {
    setActiveChallenge((prev) => (prev - 1 + challenges.length) % challenges.length);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-ts-grey-700">
        Challenges with Traditional DNS
      </h2>

      {/* Main display card */}
      <div className={`bg-${currentChallenge.bgColor} p-6 rounded-lg shadow-sm mb-6`}>
        <div className="flex items-center gap-4 mb-2">
          <div className={`p-3 rounded-full bg-${currentChallenge.color} text-white`}>
            {React.createElement(currentChallenge.icon, { size: 24 })}
          </div>
          <h3 className={`text-xl font-semibold text-${currentChallenge.color}`}>
            {currentChallenge.title}
          </h3>
        </div>

        <p className="text-ts-grey-600 mb-4 pl-14">
          {currentChallenge.description}
        </p>

        {/* Visual representation */}
        <div className="h-32 flex items-center justify-center">
          {currentChallenge.visual}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prevChallenge}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-ts-grey-100 hover:bg-ts-grey-200 transition-colors"
        >
          <ChevronLeft size={16} />
          <span className="text-sm">Previous</span>
        </button>

        <div className="flex gap-2">
          {challenges.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveChallenge(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeChallenge ? `bg-${currentChallenge.color}` : 'bg-ts-grey-200'
              }`}
              aria-label={`Challenge ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextChallenge}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-ts-grey-100 hover:bg-ts-grey-200 transition-colors"
        >
          <span className="text-sm">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <style jsx global>{`
        @keyframes grow {
          0% { width: 0; }
          80% { width: 80%; }
          100% { width: 80%; }
        }

        @keyframes queryStep1 {
          0%, 65%, 100% { opacity: 0; transform: translateX(0); }
          5%, 15% { opacity: 1; transform: translateX(100%); }
          16%, 64% { opacity: 0; transform: translateX(100%); }
        }

        @keyframes responseStep1 {
          0%, 15%, 80%, 100% { opacity: 0; transform: translateX(0); }
          16%, 25% { opacity: 1; transform: translateX(-100%); }
          26%, 79% { opacity: 0; transform: translateX(-100%); }
        }

        @keyframes queryStep2 {
          0%, 25%, 100% { opacity: 0; transform: translateX(0); }
          26%, 35% { opacity: 1; transform: translateX(100%); }
          36%, 99% { opacity: 0; transform: translateX(100%); }
        }

        @keyframes responseStep2 {
          0%, 35%, 100% { opacity: 0; transform: translateX(0); }
          36%, 45% { opacity: 1; transform: translateX(-100%); }
          46%, 99% { opacity: 0; transform: translateX(-100%); }
        }

        @keyframes queryStep3 {
          0%, 45%, 100% { opacity: 0; transform: translateX(0); }
          46%, 55% { opacity: 1; transform: translateX(100%); }
          56%, 99% { opacity: 0; transform: translateX(100%); }
        }

        @keyframes responseStep3 {
          0%, 55%, 100% { opacity: 0; transform: translateX(0); }
          56%, 65% { opacity: 1; transform: translateX(-100%); }
          66%, 99% { opacity: 0; transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default TraditionalDNSChallenges;