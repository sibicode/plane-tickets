const rules = new Intl.PluralRules('ru-RU');

export const stopsPluralize = (count: number): string => {
  if (count === 0) return 'Прямой';

  const selectRule = rules.select(count);

  switch (selectRule) {
    case 'one':
      return `${count} пересадка`;
    case 'few':
      return `${count} пересадки`;
    case 'many':
      return `${count} пересадок`;
    default:
      return 'пересадки';
  }
};
