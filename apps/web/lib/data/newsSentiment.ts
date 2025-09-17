
export interface NewsSentiment {
  buzz: {
    articlesInLastWeek: number;
    weeklyAverage: number;
  };
  companyNewsScore: number;
  sectorAverageNewsScore: number;
  sentiment: {
    bearishPercent: number;
    bullishPercent: number;
  };
  symbol: string;
}

export const appleSentiment: NewsSentiment = {
  buzz: { articlesInLastWeek: 15, weeklyAverage: 10 },
  companyNewsScore: 78,
  sectorAverageNewsScore: 72,
  sentiment: { bullishPercent: 62, bearishPercent: 38 },
  symbol: "AAPL",
};

export const microsoftSentiment: NewsSentiment = {
  buzz: { articlesInLastWeek: 12, weeklyAverage: 9 },
  companyNewsScore: 75,
  sectorAverageNewsScore: 70,
  sentiment: { bullishPercent: 60, bearishPercent: 40 },
  symbol: "MSFT",
};
