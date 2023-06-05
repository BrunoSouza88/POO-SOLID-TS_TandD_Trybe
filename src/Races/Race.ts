export default abstract class Race {
  // private _name: string;
  // private _dexterity: number;
  // private static countRaces = 0;

  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    // this._name = name;
    // this._dexterity = dexterity;
    // Race.countRaces += 1;
  }

  static createdRacesInstances(): number {
    // if (Race.countRaces === 0) {
    throw new Error('Not implemented');
    // }
    // return Race.countRaces;
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}
