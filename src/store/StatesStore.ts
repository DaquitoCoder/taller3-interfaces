import create from 'zustand';

interface StatesStore {
  voiceRecognition: boolean;
  facialRecognition: boolean;
  username: string;
  setUserName: (username: string) => void;
  setVoiceRecognition: (voiceRecognition: boolean) => void;
  setFacialRecognition: (facialRecognition: boolean) => void;
}

export const useStatesStore = create<StatesStore>((set) => ({
  voiceRecognition: false,
  facialRecognition: false,
  username: '',
  setUserName: (username: string) => set({ username }),
  setVoiceRecognition: (voiceRecognition: boolean) => set({ voiceRecognition }),
  setFacialRecognition: (facialRecognition: boolean) =>
    set({ facialRecognition }),
}));
