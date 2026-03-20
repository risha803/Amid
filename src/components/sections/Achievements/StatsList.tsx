import { stats } from "./Achievements.data";
import { StatsCard } from "./StatsCard";
import * as S from "./Achievements.style";

export const StatsList = () => {
  return (
    <S.StatsList>
      {stats.map((stat, index) => (
        <StatsCard
          key={stat.id}
          stat={stat}
          index={index}
        />
      ))}
    </S.StatsList>
  );
};