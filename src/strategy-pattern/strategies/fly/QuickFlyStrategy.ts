import { IFlyStrategy } from './IFlyStrategy';

class QuickFlyStrategy implements IFlyStrategy {
  Execute() {
    console.log('flying quickly');
  }
}

export { QuickFlyStrategy };
