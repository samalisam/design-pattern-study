import { IChirpStrategy } from './IChirpStrategy';

class QuietChripStrategy implements IChirpStrategy {
  Execute() {
    console.log('chirping quietly');
  }
}

export { QuietChripStrategy };
