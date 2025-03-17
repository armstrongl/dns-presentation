import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TitleSlideProps {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function TitleSlide({ title, onPrevious, onNext }: TitleSlideProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Navigation Arrows */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          onClick={onPrevious}
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={onNext}
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex flex-col items-center justify-center px-16 text-center"
      >
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </motion.div>
    </div>
  );
}