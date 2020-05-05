import React, { useContext } from 'react';
import { TicketsContext } from '../../context';
import { setSorting } from '../../store/actions';
import { SortTypes } from '../../constants/sort';
import { TabsPanel, Tab } from './Tabs.styled';

const Tabs: React.FC = () => {
  const { sorting } = useContext(TicketsContext.StateContext);
  const dispatch = useContext(TicketsContext.DispatchContext);
  const sortBy = sorting.sortBy;

  const handleSortChange = (sortType: SortTypes) => {
    dispatch(setSorting(sortType));
  };

  return (
    <TabsPanel>
      <Tab
        onClick={() => handleSortChange(SortTypes.cheapest)}
        active={sortBy === SortTypes.cheapest}
      >
        Самый дешевый
      </Tab>
      <Tab
        onClick={() => handleSortChange(SortTypes.fastest)}
        active={sortBy === SortTypes.fastest}
      >
        Самый быстрый
      </Tab>
    </TabsPanel>
  );
};

export default React.memo(Tabs);
