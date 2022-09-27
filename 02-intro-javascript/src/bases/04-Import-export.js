// import { heroes } from './data/heroes';

// import { heroes } from './data/heroes'; //* imp

// import heroes, { owners } from '../data/heroes';

import heroes from '../data/heroes';

// console.log(owners);

// tarea
export const etHeroById = (id) => {
    return heroes.find(heroeId => heroeId.id === id);
}

// console.log(etHeroById(2));


// find? filter
export const getHeoresByOwner = (owner) =>
    heroes.filter(heroe => heroe.owner === owner)

// console.log(getHeoresBy, owners('Marvel'));



