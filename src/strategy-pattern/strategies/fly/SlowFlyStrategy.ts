import { IFlyStrategy } from './IFlyStrategy';

class SlowFlyStrategy implements IFlyStrategy {
  Execute() {
    console.log('flying slowly');
  }
}

export { SlowFlyStrategy };
