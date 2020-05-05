import React, { useMemo, useContext } from 'react';
import { Panel, Title } from './Filters.styled';
import Checkbox from '../Checkbox';
import { TicketsContext } from '../../context';
import { stopsFilters } from '../../constants/filters';
import { setFilters } from '../../store/actions';

const Filters = () => {
  const { filters } = useContext(TicketsContext.StateContext);
  const dispatch = useContext(TicketsContext.DispatchContext);
  const activeFilters: Array<string> = filters.active;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    let filters = [...activeFilters];

    if (checked) {
      filters.push(value);
    }

    if (!checked) {
      filters = activeFilters.filter((filter: string) => filter !== value);
    }

    dispatch(setFilters(filters));
  };

  const handleAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    dispatch(setFilters(checked ? Object.keys(stopsFilters) : []));
  };

  return useMemo(
    () => (
      <Panel>
        <Title>Количество пересадок</Title>
        <Checkbox
          checked={activeFilters.length === Object.keys(stopsFilters).length}
          value='all'
          text='Все'
          onChange={handleAllChange}
        />
        {Object.entries(stopsFilters).map(([key, value]) => (
          <Checkbox
            key={key}
            value={key}
            text={value}
            onChange={handleFilterChange}
            checked={activeFilters.includes(key)}
          />
        ))}
      </Panel>
    ),
    [activeFilters]
  );
};

export default Filters;
