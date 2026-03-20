import * as S from "./Achievements.style";
import type { Stat } from "./Achievements.data";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "../../hooks/useCountUp";

type Props = {
  stat: Stat;
};

export const StatsCard = ({ stat }: Props) => {
  const { value, label, description } = stat;

  const { ref, inView } = useInView({ //наблюдатель
    triggerOnce: true,
  });

  const parseValue = (val: string) => {
    if (val.includes("k")) {
      return parseInt(val) * 1000;
    }
    return parseInt(val);
  };

  const endValue = parseValue(value);

  const animatedValue = useCountUp({
    end: endValue,
    start: inView,
  });

  const formatValue = (val: number) => {
    if (value.includes("k")) {
      return Math.floor(val / 1000) + "k+";
    }
    return val.toString();
  };

  return (
    <S.StatItem ref={ref}>
      <S.StatValue>
        {formatValue(animatedValue)}
      </S.StatValue>

      <S.StatLabel>{label}</S.StatLabel>
      <S.StatDescription>{description}</S.StatDescription>
    </S.StatItem>
  );
};