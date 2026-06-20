import { create } from 'zustand';
import { getSession } from './Functions';

export interface playerInfo {
  playerName: string;
  score: number;
  highScore: number;
  isFirstVisit?: boolean;
}
interface playerStore extends playerInfo {
  update: (info: playerStore) => void;
  incrementScore: () => void;
  addIdToClicked: (id: number) => void;
  isClicked: number[];
}

export const usePlayer = create<playerStore>((set) => ({
  playerName: getSession().playerName,

  score: 0,

  highScore: getSession().highScore,

  isFirstVisit: getSession().isFirstVisit,

  isClicked: [],

  incrementScore: () => set((state) => ({ score: state.score + 1 })),

  addIdToClicked: (id) =>
    set((state) => ({ isClicked: [...state.isClicked, id] })),

  update: (playerInfo) => set((state) => ({ ...state, ...playerInfo })),
}));
