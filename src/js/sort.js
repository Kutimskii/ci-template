export default function sortByHealth (players) {
 return players.sort((a,b) => {
    return b.health - a.health;
})
}