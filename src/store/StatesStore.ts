import { create } from 'zustand';

interface StatesStore {
  voiceRecognition: boolean;
  username: string;
  setUserName: (username: string) => void;
  setVoiceRecognition: (voiceRecognition: boolean) => void;
}

export const useStatesStore = create<StatesStore>((set) => ({
  voiceRecognition: false,
  username: '',
  setUserName: (username: string) => set({ username }),
  setVoiceRecognition: (voiceRecognition: boolean) => set({ voiceRecognition }),
}));
