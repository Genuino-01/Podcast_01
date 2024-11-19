import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { usePodcastStore } from '../store/podcastStore';

export const TopicInput: React.FC = () => {
  const { state, updateSettings, setStep } = usePodcastStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.settings.topic.trim()) {
      setStep('settings');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        What would you like your podcast to be about?
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={state.settings.topic}
            onChange={(e) => updateSettings({ topic: e.target.value })}
            placeholder="Enter your topic or idea..."
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none text-lg"
          />
        </div>
        
        <button
          type="submit"
          disabled={!state.settings.topic.trim()}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          <span>Continue</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </form>
      
      <div className="mt-8 text-center text-gray-600">
        <p>Popular topics:</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {['Technology', 'Science', 'History', 'Business', 'Health'].map((topic) => (
            <button
              key={topic}
              onClick={() => updateSettings({ topic })}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};