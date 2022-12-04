export type Stats = {
    correct: string[];
    incorrect: string[];
};

export type Context = {
    isStartedTyping: boolean;
    setIsStartedTyping: (isStartedTyping: boolean) => void;
    onTimerStop: () => void;
    onRestart: () => void;
    stats: Stats;
    setStats: (stats: Stats) => void;
};