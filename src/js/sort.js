export default function sortByHealth(players) {
  return players.sort((a, b) => b.health - a.health);
}
