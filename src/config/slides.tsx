import React from 'react';
import TailscaleDNSOpeningSlide from "@/components/slides/Intro";
import TailscaleDNSAgendaSlide from "@/components/slides/Agenda";
import TraditionalDNSProcess from "@/components/slides/TraditionalDNSProcess";
import TailscaleVsTraditionalDNS from "@/components/slides/TailscaleVsTraditionalDNS";
import TailscaleDNSProcess from "@/components/slides/TailscaleDNSProcess";
import KeyTakeaways from "@/components/slides/KeyTakeaways";
import DNSChallenges from "@/components/slides/DNSChallenges";
import ExitNodeDNSFlow from "@/components/slides/ExitNodes";
import Quad100 from "@/components/slides/Quad100";
import SplitDNS from "@/components/slides/SplitDNS";
import MagicDNS from "@/components/slides/MagicDNS";
export interface Slide {
  title?: string;
  content: React.ReactNode;
  section?: string;
}

export const slides: Slide[] = [
  // Introduction
  {
    content: <TailscaleDNSOpeningSlide />,
    section: "Introduction"
  },
  {
    content: <TailscaleDNSAgendaSlide />,
    section: "Introduction"
  },
  {
    content: <TraditionalDNSProcess />,
    section: "Traditional DNS"
  },
  {
    content: <TailscaleDNSProcess />,
    section: "Tailscale DNS"
  },
    {
      content: <TailscaleVsTraditionalDNS />,
      section: "Tailscale DNS"
    },
    {
      content: <DNSChallenges />,
      section: "Traditional DNS"
    },
    {
      content: <ExitNodeDNSFlow />,
      section: "Tailscale DNS"
    },
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
    content: <KeyTakeaways />,
    section: "Conclusion"
  }
];