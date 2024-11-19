import React from 'react';
import { Clock, Globe, BarChart2, ArrowLeft, ArrowRight } from 'lucide-react';
import { usePodcastStore } from '../store/podcastStore';

export const PodcastSettings: React.FC = () => {
  const { state, updateSettings, setStep } = usePodcastStore();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setStep('topic')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900">Customize Your Podcast</h2>
        
        <div className="w-20"></div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <label className="flex items-center space-x-2 text-gray-700 font-medium">
            <BarChart2 className="h-5 w-5" />
            <span>Content Depth</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['basic', 'intermediate', 'advanced'].map((depth) => (
              <button
                key={depth}
                onClick={() => updateSettings({ depth: depth as any })}
                className={`p-4 rounded-xl border ${
                  state.settings.depth === depth
                    ? 'border-purple-600 bg-purple-50 text-purple-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {depth.charAt(0).toUpperCase() + depth.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-2 text-gray-700 font-medium">
            <Globe className="h-5 w-5" />
            <span>Language</span>
          </label>
          <select
            value={state.settings.language}
            onChange={(e) => updateSettings({ language: e.target.value })}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-2 text-gray-700 font-medium">
            <Clock className="h-5 w-5" />
            <span>Duration (minutes)</span>
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={state.settings.duration}
            onChange={(e) => updateSettings({ duration: parseInt(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>5 min</span>
            <span>{state.settings.duration} min</span>
            <span>30 min</span>
          </div>
        </div>

        <button
          onClick={() => setStep('voice')}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
        >
          <span>Continue to Voice Selection</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};