import { Bird } from './Bird';
import { QuietChripStrategy } from '../../strategies/chirp/QuietChripStrategy';
import { QuickFlyStrategy } from '../../strategies/fly/QuickFlyStrategy';

class MountainBird extends Bird {
  constructor() {
    super(new QuietChripStrategy(), new QuickFlyStrategy());

    console.log(`instantiated "${MountainBird.name}"`);
  }
}

export { MountainBird };
