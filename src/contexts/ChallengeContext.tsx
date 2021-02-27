import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void; 
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children } : ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengeCompleted] = useState(1);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const ramdomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[ramdomChallengeIndex];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengeContext.Provider 
      value={{
        level, 
        currentExperience, 
        challengesCompleted,  
        activeChallenge,
        startNewChallenge,
        levelUp
      }}>
      {children}
    </ChallengeContext.Provider>
  )

}