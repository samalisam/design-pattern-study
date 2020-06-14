import { Bird } from './Bird';
import { LoudChirpStrategy } from '../../strategies/chirp/LoudChirpStrategy';
import { SlowFlyStrategy } from '../../strategies/fly/SlowFlyStrategy';

class CityBird extends Bird {
  constructor() {
    super(new LoudChirpStrategy(), new SlowFlyStrategy());

    console.log(`instantiated "${CityBird.name}"`);
  }
}

export { CityBird };
