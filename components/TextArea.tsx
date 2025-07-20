'use client';

import { ChangeEvent } from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextArea({ value, onChange, placeholder }: TextAreaProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Enter your text
      </label>
      <textarea
        id="text-input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-96 p-4 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-800"
        aria-describedby="text-input-description"
      />
      <p id="text-input-description" className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Start typing or paste your text to see live statistics
      </p>
    </div>
  );
}