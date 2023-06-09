import sortByHealth from '../sort';

const players = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
test('players', () => {
  const result = sortByHealth(players);
  const expected = players.sort((a, b) => b.health - a.health);
  expect(result).toEqual(expected);
});
