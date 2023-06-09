import Race from './Race';

export default class Halfling extends Race {
  private _maxLife: number;
  static _createdCharInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 60;
    Halfling._createdCharInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
  
  static createdRacesInstances(): number {
    return Halfling._createdCharInstances;
  }
}