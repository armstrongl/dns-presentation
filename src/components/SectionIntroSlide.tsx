import React from 'react';
import { motion } from 'framer-motion';

interface SectionIntroSlideProps {
  title: string;
  talkingPoints: string[];
  sectionNumber?: number;
  totalSections?: number;
}

const SectionIntroSlide: React.FC<SectionIntroSlideProps> = ({
  title,
  talkingPoints,
  sectionNumber,
  totalSections,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col h-full w-full bg-ts-grey-50 p-8 md:p-12">
      {/* Section indicator if provided */}
      {sectionNumber && totalSections && (
        <div className="text-ts-grey-400 mb-2 text-sm">
          Section {sectionNumber} of {totalSections}
        </div>
      )}

      {/* Main title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ts-grey-700">
          {title}
        </h1>
      </motion.div>

      {/* Talking points */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow"
      >
        <h2 className="text-xl md:text-2xl font-medium text-ts-blue-300 mb-6">
          In this section:
        </h2>
        <ul className="space-y-4 max-w-3xl">
          {talkingPoints.map((point, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ts-blue-300 flex items-center justify-center text-white font-medium mr-3 mt-0.5">
                {index + 1}
              </div>
              <p className="text-lg md:text-xl text-ts-grey-600">{point}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Tailscale branding element - subtle curved line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-ts-blue-300 via-ts-purple-300 to-ts-green-300 opacity-80" />
    </div>
  );
};

export default SectionIntroSlide;

// Usage example:
/*
<SectionIntroSlide
  title="DNS Fundamentals"
  sectionNumber={2}
  totalSections={5}
  talkingPoints={[
    "How traditional DNS resolution works",
    "The four-step resolution process",
    "Common limitations and challenges",
    "Performance implications of TTLs and caching"
  ]}
/>
*/