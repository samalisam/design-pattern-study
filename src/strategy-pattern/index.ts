import { CityBird } from './models/bird/CityBird';
import { MountainBird } from './models/bird/MountainBird';

const cityBird = new CityBird();
cityBird.Chirp();
cityBird.Fly();

const mountainBird = new MountainBird();
mountainBird.Chirp();
mountainBird.Fly();
