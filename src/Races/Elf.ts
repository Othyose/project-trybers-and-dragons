import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdElvenInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdElvenInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._createdElvenInstances;
  }
}