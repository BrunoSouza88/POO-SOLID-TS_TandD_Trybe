import Race from './Race';

export default class Dwarf extends Race {
  private _maxLife: number;
  static _createdCharInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 80;
    Dwarf._createdCharInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdCharInstances;
  }
}