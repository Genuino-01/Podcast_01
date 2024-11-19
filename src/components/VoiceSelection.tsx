import React from 'react';
import { Mic, Speaker, ArrowLeft, ArrowRight } from 'lucide-react';
import { usePodcastStore } from '../store/podcastStore';

export const VoiceSelection: React.FC = () => {
  const { state, updateSettings, setStep } = usePodcastStore();

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setStep('settings')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900">Choose Your Voice</h2>
        
        <div className="w-20"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button
          onClick={() => updateSettings({ voiceType: 'ai' })}
          className={`p-6 rounded-xl border ${
            state.settings.voiceType === 'ai'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Speaker className="h-12 w-12 mx-auto mb-4 text-purple-600" />
          <h3 className="text-lg font-semibold mb-2">AI-Generated Voice</h3>
          <p className="text-gray-600 text-sm">
            Choose from a variety of professional AI voices
          </p>
        </button>

        <button
          onClick={() => updateSettings({ voiceType: 'own' })}
          className={`p-6 rounded-xl border ${
            state.settings.voiceType === 'own'
              ? 'border-purple-600 bg-purple-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Mic className="h-12 w-12 mx-auto mb-4 text-purple-600" />
          <h3 className="text-lg font-semibold mb-2">Use Your Own Voice</h3>
          <p className="text-gray-600 text-sm">
            Record and clone your voice for a personal touch
          </p>
        </button>
      </div>

      {state.settings.voiceType === 'ai' && (
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-semibold">Select AI Voice</h3>
          <div className="grid grid-cols-2 gap-4">
            {['Professional Male', 'Professional Female', 'Casual Male', 'Casual Female'].map((voice) => (
              <button
                key={voice}
                className="p-4 rounded-xl border border-gray-200 hover:border-purple-600 hover:bg-purple-50"
              >
                <p className="font-medium">{voice}</p>
                <p className="text-sm text-gray-600">Preview</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {state.settings.voiceType === 'own' && (
        <div className="space-y-6 mb-8">
          <h3 className="text-lg font-semibold">Record Your Voice</h3>
          <div className="p-8 border-2 border-dashed border-gray-300 rounded-xl text-center">
            <Mic className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">Click to start recording your voice</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setStep('preview')}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
      >
        <span>Generate Podcast</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
};