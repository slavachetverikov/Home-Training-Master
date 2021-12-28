import { TrainingItem } from "./TrainingItem";

export interface CartItem {
  id: number;
  quantity: number;
}

export function cartItemFromTrainingItem(trainingItem: TrainingItem) {
  return {
    id: trainingItem.id,
    quantity: 1,
  };
}
