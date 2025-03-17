import React from 'react';
import { motion } from 'framer-motion';

interface QASlideProps {
  title?: string;
  questions?: {
    question: string;
    answer: string;
  }[];
  sectionNumber?: number;
  totalSections?: number;
}

const QASlide: React.FC<QASlideProps> = ({
  title,
  questions = [],
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
    <div className="flex flex-col h-full w-full bg-ts-grey-50 p-8 md:p-12 items-center justify-center">
      {/* Section indicator if provided */}
      {sectionNumber && totalSections && (
        <div className="text-ts-grey-400 mb-2 text-sm text-center">
          Section {sectionNumber} of {totalSections}
        </div>
      )}

      {/* Main title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ts-grey-700">
          {title}
        </h1>
      </motion.div>

      {/* Q&A section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow w-full max-w-4xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl font-medium text-ts-blue-300 mb-6 text-center">
          Questions & Answers
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {questions.map((qa, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ts-blue-300 flex items-center justify-center text-white font-medium mr-3 mt-0.5">
                  Q{index + 1}
                </div>
                <p className="text-lg md:text-xl font-medium text-ts-grey-700">
                  {qa.question}
                </p>
              </div>
              <div className="ml-9">
                <p className="text-lg md:text-xl text-ts-grey-600">
                  {qa.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tailscale branding element - subtle curved line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-ts-blue-300 via-ts-purple-300 to-ts-green-300 opacity-80" />
    </div>
  );
};

export default QASlide;

// Usage example:
/*
<QASlide
  title="Common DNS Questions"
  sectionNumber={3}
  totalSections={5}
  questions={[
    {
      question: "What is DNS?",
      answer: "DNS (Domain Name System) is like the internet's phone book, translating human-readable domain names into IP addresses that computers use to communicate."
    },
    {
      question: "Why is DNS important?",
      answer: "DNS is crucial for internet functionality, making it possible to use memorable domain names instead of numerical IP addresses, and enabling various internet services to work seamlessly."
    }
  ]}
/>
*/