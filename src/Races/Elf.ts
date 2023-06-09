import Race from './Race';

export default class Elf extends Race {
  private _maxLife: number;
  static _createdCharInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 99;
    Elf._createdCharInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Elf._createdCharInstances;
  }
}