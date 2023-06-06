import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set lifePoints(value: number) {
    if (value < 1) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = value;
    }
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    let currentLife = this.lifePoints;
    if (attackPoints > 0) {
      const damageReceived = currentLife - attackPoints;
      currentLife = damageReceived;
    }
    return currentLife;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
