type DescriptionType = "image" | "text" | "video";

export interface Description {
  type: DescriptionType;
}

export interface TextDescription extends Description {
  text: string;
}

export interface ImageDescription extends Description {
  imageSrc: string;
}

export interface VideoDescription extends Description {
  videoSrc: string;
}
