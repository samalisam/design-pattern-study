import { IChirpStrategy } from './IChirpStrategy';

class LoudChirpStrategy implements IChirpStrategy {
  Execute() {
    console.log('chirping loudly');
  }
}

export { LoudChirpStrategy };
