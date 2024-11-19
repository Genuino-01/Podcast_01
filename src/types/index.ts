export type User = {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
};

export type VoiceOption = 'ai' | 'own';

export type PodcastSettings = {
  topic: string;
  depth: 'basic' | 'intermediate' | 'advanced';
  language: string;
  duration: number;
  voiceType: VoiceOption;
};

export type PodcastState = {
  isGenerating: boolean;
  currentStep: 'topic' | 'settings' | 'voice' | 'preview';
  settings: PodcastSettings;
};