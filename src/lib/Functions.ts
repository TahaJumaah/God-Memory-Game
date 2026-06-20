import type { God } from '../Godlist';

type playerSession = {
  playerName: string;
  highScore: number;
  isFirstVisit: boolean;
};
export function getSession(): playerSession {
  return {
    playerName: sessionStorage.getItem('playerName'),
    highScore: Number(sessionStorage.getItem('highScore')),
    isFirstVisit: !sessionStorage.getItem('isFirstVisit'),
  };
}

export function updateSession(sessionInfo: playerSession): playerSession {
  for (const [key, value] of Object.entries(sessionInfo)) {
    console.log(key, value);
    sessionStorage.setItem(key, String(value));
  }

  return getSession();
}

export function shuffleArray(array: Array<God>) {
  return array.toSorted(() => Math.random() * 10 - 5);
}
