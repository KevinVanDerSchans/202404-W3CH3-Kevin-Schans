import {Pet} from '../models/pet';

export const getPets = (): Pet[] => [
	new Pet('Kira', 'Dog'),
	new Pet('Jinx', 'Cat'),
	new Pet('Doruk', 'Dog'),
];
