import { FileText, Zap, Shield, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          About WordCount Pro
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A powerful, free, and privacy-focused word counting tool designed for writers, students, and professionals.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">What is WordCount Pro?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          WordCount Pro is a comprehensive text analysis tool that provides real-time statistics about your writing. 
          Whether you're working on an essay, article, blog post, or any other written content, our tool helps you 
          understand your text better with detailed metrics.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Built with modern web technologies including Next.js and TypeScript, WordCount Pro offers a fast, 
          responsive experience across all devices while maintaining your privacy by processing all text locally 
          in your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Real-time Analysis</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Get instant feedback as you type. No need to click buttons or wait for processing – 
            statistics update automatically as you write.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Privacy Protected</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Your text never leaves your device. All analysis is performed locally in your browser, 
            ensuring complete privacy and security.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <div className="flex items-center mb-4">
            <Smartphone className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Mobile Optimized</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Designed with a mobile-first approach, WordCount Pro works seamlessly on smartphones, 
            tablets, and desktop computers.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 transition-colors">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Comprehensive Stats</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Track words, characters (with and without spaces), sentences, paragraphs, and 
            estimated reading time all in one place.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Type or Paste Your Text</h3>
              <p className="text-gray-600 dark:text-gray-300">Enter your content directly in the text area or paste it from another source.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Watch Statistics Update</h3>
              <p className="text-gray-600 dark:text-gray-300">As you type, all statistics are calculated and displayed in real-time.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Use the Data</h3>
              <p className="text-gray-600 dark:text-gray-300">Use the statistics to optimize your writing for specific requirements or guidelines.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800 p-8 transition-colors">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Perfect For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Students</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Meet essay and assignment word requirements</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Writers</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Track progress and meet publishing standards</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Professionals</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Optimize content length for different platforms</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Bloggers</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Create content with optimal reading times</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Marketers</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Craft copy that fits platform requirements</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Editors</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Review and analyze text efficiently</p>
          </div>
        </div>
      </div>
    </div>
  );
}