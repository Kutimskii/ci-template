import defineHealth from '../health';

test('health  = 14', () => {
  const result = defineHealth(14);
  expect(result).toBe('critical');
});


test.each([
  [55, 'healthy'],
  [25, 'wounded'],
  [10, 'critical'],
])('test health function with %h and %s', (health, expectedState) => {
  const result = defineHealth(health);
  expect(result).toBe(expectedState);
});
