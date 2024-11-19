import { create } from 'zustand';
import { PodcastState, PodcastSettings } from '../types';

type PodcastStore = {
  state: PodcastState;
  updateSettings: (settings: Partial<PodcastSettings>) => void;
  setStep: (step: PodcastState['currentStep']) => void;
  setGenerating: (isGenerating: boolean) => void;
};

const initialSettings: PodcastSettings = {
  topic: '',
  depth: 'intermediate',
  language: 'en',
  duration: 10,
  voiceType: 'ai',
};

export const usePodcastStore = create<PodcastStore>((set) => ({
  state: {
    isGenerating: false,
    currentStep: 'topic',
    settings: initialSettings,
  },
  updateSettings: (newSettings) =>
    set((state) => ({
      state: {
        ...state.state,
        settings: { ...state.state.settings, ...newSettings },
      },
    })),
  setStep: (step) =>
    set((state) => ({
      state: { ...state.state, currentStep: step },
    })),
  setGenerating: (isGenerating) =>
    set((state) => ({
      state: { ...state.state, isGenerating },
    })),
}));