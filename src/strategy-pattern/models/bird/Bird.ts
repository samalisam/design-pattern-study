import { IChirpStrategy } from '../../strategies/chirp/IChirpStrategy';
import { IFlyStrategy } from '../../strategies/fly/IFlyStrategy';

abstract class Bird {
  private chripStrategy: IChirpStrategy;
  private flyStrategy: IFlyStrategy;

  constructor(chirpStrategy: IChirpStrategy, flyStrategy: IFlyStrategy) {
    this.chripStrategy = chirpStrategy;
    this.flyStrategy = flyStrategy;
  }

  Chirp() {
    this.chripStrategy.Execute();
  }

  Fly() {
    this.flyStrategy.Execute();
  }
}

export { Bird };
