import React from 'react';
import {
  minutesToHours,
  departureAndArrivalTime,
} from '../../helpers/formatDate';
import { stopsPluralize } from '../../helpers/plurals';
import { priceFormat } from '../../helpers/formatPrice';
import {
  Wrapper,
  Header,
  Content,
  InfoLabel,
  InfoText,
  Preview,
  Price,
  Info,
} from './Ticket.syled';
import { TicketType } from '../../types';

type TicketProps = { ticket: TicketType };

const Ticket: React.FC<TicketProps> = ({
  ticket: { price, carrier, segments },
}) => {
  return (
    <Wrapper>
      <Header>
        <Price>{priceFormat(price)} Р</Price>
        <Preview>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </Preview>
      </Header>
      {segments.map((segment) => (
        <Content key={segment.duration}>
          <Info>
            <InfoLabel>
              {segment.origin} – {segment.destination}
            </InfoLabel>
            <InfoText>
              {departureAndArrivalTime(segment.date, segment.duration)}
            </InfoText>
          </Info>

          <Info>
            <InfoLabel>В пути</InfoLabel>
            <InfoText>{minutesToHours(segment.duration)}</InfoText>
          </Info>

          <Info>
            <InfoLabel>{stopsPluralize(segment.stops.length)}</InfoLabel>
            <InfoText>{segment.stops.join(', ') || '—'}</InfoText>
          </Info>
        </Content>
      ))}
    </Wrapper>
  );
};

export default Ticket;
