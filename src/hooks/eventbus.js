import { globalEventBusImpl } from '../eventbus';

// using event bus like hook
export default function useEventBus() {
  return globalEventBusImpl;
}
