'use client';

import { motion } from 'framer-motion';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
  variant?: 'blue' | 'purple' | 'gray';
}

const VARIANT_STYLES = {
  blue: {
    circle: 'bg-blue-600 shadow-blue-200',
    icon: 'text-blue-600',
    border: 'hover:border-blue-200'
  },
  purple: {
    circle: 'bg-purple-600 shadow-purple-200',
    icon: 'text-purple-600',
    border: 'hover:border-purple-200'
  },
  gray: {
    circle: 'bg-gray-800 shadow-gray-200',
    icon: 'text-gray-800',
    border: 'hover:border-gray-200'
  }
};

export function StepCard({ number, title, description, index, variant = 'gray' }: StepCardProps) {
  const style = VARIANT_STYLES[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative p-8 rounded-[32px] border border-white bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 ${style.border}`}
    >
      {/* Step Number Badge */}
      <div className={`w-12 h-12 ${style.circle} text-white rounded-2xl flex items-center justify-center font-black text-xl mb-8 shadow-xl rotate-3`}>
        {number}
      </div>

      <h4 className="text-xl font-bold mb-4 text-gray-900 leading-tight tracking-tight">
        {title}
      </h4>
      
      <p className="text-gray-500 leading-relaxed break-keep whitespace-pre-line text-[15px]">
        {description}
      </p>

      {/* 배경에 살짝 비치는 큰 숫자 (디자인 포인트) */}
      <span className="absolute right-6 bottom-4 text-8xl font-black text-gray-50 opacity-[0.03] select-none pointer-events-none">
        {number}
      </span>
    </motion.div>
  );
}