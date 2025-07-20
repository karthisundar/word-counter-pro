'use client';

import { useState } from 'react';
import TextArea from '@/components/TextArea';
import StatsPanel from '@/components/StatsPanel';
import { Trash2 } from 'lucide-react';

export default function Home() {
  const [text, setText] = useState('');

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Word Counter Tool
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Analyze your text in real-time. Get word counts, character counts, reading time estimates, and more with our free online tool.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Text Input Section */}
        <div className="lg:col-span-2 space-y-4">
          <TextArea
            value={text}
            onChange={setText}
            placeholder="Start typing or paste your text here to see live statistics..."
          />
          
          <div className="flex justify-end">
            <button
              onClick={handleClear}
              disabled={!text}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Clear text"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Text
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <StatsPanel text={text} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 transition-colors">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Real-time Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Get instant statistics as you type without needing to click any buttons.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 dark:text-green-400 font-bold text-xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mobile Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Works perfectly on all devices with a responsive, touch-friendly design.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 dark:text-purple-400 font-bold text-xl">🔒</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Privacy First</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Your text is processed locally in your browser. Nothing is sent to our servers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}