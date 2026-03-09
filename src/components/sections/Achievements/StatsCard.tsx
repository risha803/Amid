import * as S from "./Achievements.style";
import type { Stat } from "./Achievements.data";

type Props = {
  stat: Stat;
};

export const StatsCard = ({ stat }: Props) => {
  const { value, label, description } = stat;

  return (
    <S.StatItem>

      <S.StatValue>
        {value}
      </S.StatValue>

      <S.StatText>
        <S.StatLabel>{label}</S.StatLabel>
        <S.StatDescription>{description}</S.StatDescription>
      </S.StatText>

    </S.StatItem>
  );
};