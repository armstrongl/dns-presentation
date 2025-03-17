import React from 'react';
import TailscaleDNSOpeningSlide from "@/components/slides/Intro";
import TailscaleDNSAgendaSlide from "@/components/slides/Agenda";
import TraditionalDNSProcess from "@/components/slides/TraditionalDNSProcess";
import TailscaleVsTraditionalDNS from "@/components/slides/TailscaleVsTraditionalDNS";
import TailscaleDNSProcess from "@/components/slides/TailscaleDNSProcess";
import KeyTakeaways from "@/components/slides/KeyTakeaways";
import DNSChallenges from "@/components/slides/DNSChallenges";
import Quad100 from "@/components/slides/Quad100";
import SplitDNS from "@/components/slides/SplitDNS";
import MagicDNS from "@/components/slides/MagicDNS";
import RealWorldScenarios from "@/components/slides/RealWorldScenarios";
import SectionIntroSlide from "@/components/SectionIntroSlide";
import TitleSlide from "@/components/TitleSlide";
// import CoreComponents from "@/components/slides/CoreComponents";
import DNSContacts from "@/components/slides/ContactList";
import DNSRecordsExplorer from "@/components/slides/RecordsExplorer";
import DomainNameAnatomy from "@/components/slides/DomainNameAnatomy";
import QASlide from "@/components/QASlide";


export interface Slide {
  title?: string;
  content: React.ReactNode;
  section?: string;
}

export const slides: Slide[] = [
  {
    content: <TitleSlide />
  },
  {
    content: <TailscaleDNSAgendaSlide />,
    section: "Introduction"
  },
  {
    content: <SectionIntroSlide
      title="DNS Fundamentals"
      sectionNumber={1}
      totalSections={5}
      talkingPoints={[
        "What is DNS?",
        "DNS resolution process",
        "Anatomy of a domain name",
        "DNS limitations"
      ]}
/>},
  {
    content: <TailscaleDNSOpeningSlide />,
    section: "Introduction"
  },
  {
    content: <DNSContacts />,
    section: "Traditional DNS"
  },
  // {
  //   content: <CoreComponents />,
  //   section: "Traditional DNS"
  // },
  {
    content: <TraditionalDNSProcess />,
    section: "Traditional DNS"
  },
  {
    content: <DomainNameAnatomy />,
    section: "Traditional DNS"
  },
  {
    content: <DNSRecordsExplorer />,
    section: "Traditional DNS"
  },
  {
    content: <DNSChallenges />,
    section: "Traditional DNS"
  },
  // Tailscale DNS
  {
    content: <SectionIntroSlide
      title="Tailscale DNS"
      sectionNumber={2}
      totalSections={5}
      talkingPoints={[
        "Dedicated resolver at 100.100.100.100 (Quad100)",
        "Push-based instant updates",
        "Local-first resolution for tailnet names",
        "DoH upgrade for external requests",
      ]}
/>},
  {
    content: <TailscaleDNSProcess />,
    section: "Tailscale DNS"
  },
  {
    content: <TailscaleVsTraditionalDNS />,
    section: "Tailscale DNS"
  },
  {
    content: <SectionIntroSlide
      title="Tailscale DNS Features"
      sectionNumber={3}
      totalSections={5}
      talkingPoints={[
        "MagicDNS",
        "Quad100",
        "Split DNS",
      ]}
/>},

  {
    content: <MagicDNS />,
    section: "Tailscale DNS"
  },
  {
    content: <Quad100 />,
    section: "Tailscale DNS"
  },
  {
    content: <SplitDNS />,
    section: "Tailscale DNS"
  },
  {
    content: <SectionIntroSlide
      title="Real World Scenarios"
      sectionNumber={4}
      totalSections={5}
      talkingPoints={[
        "Corporate DNS",
        "DNS and Exit Nodes",
      ]}
/>},
  {
    content: <RealWorldScenarios />,
    section: "Tailscale DNS"
  },
  // Conclusion
  {
    content: <SectionIntroSlide
      title="Wrapping Up"
      sectionNumber={5}
      totalSections={5}
      talkingPoints={[
        "Key Takeaways",
        "Q&A"
      ]}
/>},
  {
    content: <KeyTakeaways />,
    section: "Conclusion"
  },
  {
    content: <QASlide
      title="Questions?"
    />,
    section: "Conclusion"
  }
];