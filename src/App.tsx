import React from 'react';
import { Header } from './components/Header';
import { TopicInput } from './components/TopicInput';
import { PodcastSettings } from './components/PodcastSettings';
import { VoiceSelection } from './components/VoiceSelection';
import { usePodcastStore } from './store/podcastStore';

function App() {
  const { state } = usePodcastStore();

  const renderStep = () => {
    switch (state.currentStep) {
      case 'topic':
        return <TopicInput />;
      case 'settings':
        return <PodcastSettings />;
      case 'voice':
        return <VoiceSelection />;
      case 'preview':
        return (
          <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-xl text-gray-600">Generating your podcast...</p>
          </div>
        );
      default:
        return <TopicInput />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        {renderStep()}
      </main>
    </div>
  );
}

export default App;