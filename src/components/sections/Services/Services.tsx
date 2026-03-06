import * as S from "./Services.style";
import { Container } from "../../layout/Container";
import { services } from "./services.data";
import { ServiceCard } from "./ServiceCard";
import { ServicesHeader } from "./ServicesHeader";

export const Services = () => (
  <S.Wrapper>
    <Container>

      <ServicesHeader />

      <S.Grid>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </S.Grid>

    </Container>
  </S.Wrapper>
);