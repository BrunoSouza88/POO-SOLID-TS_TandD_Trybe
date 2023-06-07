import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1: Character = new Character('Saulo');
const player2: Character = new Character('Lucas');
const player3: Character = new Character('Fernando');

player1.levelUp();
player1.levelUp();
player1.levelUp();

export { player1, player2, player3 };

const monster1: Monster = new Monster();
const monster2: Monster = new Dragon();

export { monster1, monster2 };

const pvp: PVP = new PVP(player2, player3);

export { pvp };

const pve: PVE = new PVE(player1, [monster1, monster2]);

export { pve };

export const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};
