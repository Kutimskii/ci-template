// const player = {
//   name: 'Маг', health: 90
// }

export default function defineHealth(health) {
  if (health > 50) {
    return 'healthy';
  } if (health < 50 && health > 15) {
    return 'wounded';
  } return 'critical';
}
