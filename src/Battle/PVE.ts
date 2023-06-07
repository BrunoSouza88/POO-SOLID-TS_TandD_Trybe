import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[];
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    const lastMonsters = this._monsters[this._monsters.length - 1];
    const { player } = this;
    const arrayMonster = this._monsters;
    player.attack(lastMonsters);
    this._monsters.map((element) => element.attack(player));

    if (lastMonsters.lifePoints === -1) {
      arrayMonster.pop();
    }
    while (player.lifePoints !== -1 && arrayMonster.length !== 0);
    return super.fight();
  }
}