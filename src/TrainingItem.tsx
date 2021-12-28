import { Description } from "./Descriptions";

// export enum ItemColor {
//   red = "Red",
//   blue = "Blue",
//   black = "Black"
// }

export enum ItemDuration {
  five_minutes = "5 minutes",
  ten_minutes = "10 minutes",
  fifteen_minutes = "15 minutes",
  twenty_minutes = "20 minutes",
  twentyfive_minutes = "25 minutes",
  thirty_minutes = "30 minutes",
  fourty_minutes = "40 minutes",
}

export class TrainingItem {
  public id: number;
  public title: string;
  public imageSrc: string;
  public brief1: string;
  public brief2: string;
  public description: Description[];
  public duration: ItemDuration;

  constructor(
    id: number,
    title: string,
    imageSrc: string,
    brief1: string,
    brief2: string,
    description: Description[],
    duration: ItemDuration
  ) {
    this.id = id;
    this.title = title;
    this.imageSrc = imageSrc;
    this.brief1 = brief1;
    this.brief2 = brief2;
    this.description = description;
    this.duration = duration;
  }
}
