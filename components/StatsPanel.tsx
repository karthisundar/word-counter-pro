'use client';

import { useMemo } from 'react';
import { analyzeText, formatReadingTime, TextStats } from '@/utils/textUtils';
import { FileText, Hash, Clock, Type } from 'lucide-react';

interface StatsPanelProps {
  text: string;
}

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  description: string;
}

function StatItem({ icon, label, value, description }: StatItemProps) {
  return (
    <div  className="bg-white pr-6 dark:bg-gray-800 pr-[150px] p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function StatsPanel({ text }: StatsPanelProps) {
  const stats: TextStats = useMemo(() => analyzeText(text), [text]);

  const statItems = [
    {
      icon: <Type className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Words',
      value: stats.wordCount.toLocaleString(),
      description: 'Total word count'
    },
    {
      icon: <Hash className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Characters',
      value: stats.characterCount.toLocaleString(),
      description: 'Including spaces'
    },
    {
      icon: <Hash className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Characters',
      value: stats.characterCountNoSpaces.toLocaleString(),
      description: 'Excluding spaces'
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Sentences',
      value: stats.sentenceCount.toLocaleString(),
      description: 'Total sentences'
    },
    {
      icon: <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Paragraphs',
      value: stats.paragraphCount.toLocaleString(),
      description: 'Total paragraphs'
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      label: 'Reading Time',
      value: formatReadingTime(stats.readingTime),
      description: 'Avg. 200 words/min'
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Text Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-8">
        {statItems.map((item, index) => (
          <StatItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}