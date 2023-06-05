import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _charEnergy: EnergyType;
  static _createdCharClass = 0;

  constructor(name: string) {
    super(name);

    this._charEnergy = 'mana';
    Necromancer._createdCharClass += 1;
  }

  get energyType(): EnergyType {
    return this._charEnergy;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdCharClass;
  }
}
