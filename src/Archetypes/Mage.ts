import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _charEnergy: EnergyType;
  static _createdCharClass = 0;

  constructor(name: string) {
    super(name);

    this._charEnergy = 'mana';
    Mage._createdCharClass += 1;
  }

  get energyType(): EnergyType {
    return this._charEnergy;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdCharClass;
  }
}
