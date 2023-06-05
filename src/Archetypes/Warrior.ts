import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _charEnergy: EnergyType;
  static _createdCharClass = 0;

  constructor(name: string) {
    super(name);

    this._charEnergy = 'stamina';
    Warrior._createdCharClass += 1;
  }

  get energyType(): EnergyType {
    return this._charEnergy;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdCharClass;
  }
}
