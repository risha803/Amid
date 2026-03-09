import { stats } from "./Achievements.data";
import { StatsCard } from "./StatsCard";
import * as S from "./Achievements.style";

export const StatsList = () => {
  return (
    <S.StatsList>
      {stats.map((stat) => (
        <StatsCard
          key={stat.id}
          stat={stat}
        />
      ))}
    </S.StatsList>
  );
};