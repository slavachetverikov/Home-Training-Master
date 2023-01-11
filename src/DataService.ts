import { CommentItem } from "./CommentItem";
import { TrainingItem } from "./TrainingItem";

// export const DATA_URL = "http://localhost:4000";

export const DATA_URL = "https://jsonserver-ebon.vercel.app";


export class DataService {
  async getData(duration: string | null): Promise<TrainingItem[]> {
    let url = "";

    if (duration) {
      url = `${DATA_URL}/items?duration=${duration}`;
    } else {
      url = `${DATA_URL}/items`;
    }

    let responsePromise: Promise<Response> = fetch(url);
    let response: Response = await responsePromise;

    let jsonPromise: Promise<any> = response.json();

    let data = (await jsonPromise) as TrainingItem[];

    return data;
  }

  async getItem(id: number): Promise<TrainingItem> {
    let responsePromise: Promise<Response> = fetch(`${DATA_URL}/items/${id}`);

    return (await (await responsePromise).json()) as TrainingItem;
  }

  async submitComment(trainingItemId: number, textContent: string) {
    let comment: CommentItem = {
      id: 0,
      trainingItemId: trainingItemId,
      text: textContent,
    };

    await fetch(`${DATA_URL}/comments/`, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(comment),
    });
  }

  async getAllComments(trainingItemId: number): Promise<CommentItem[]> {
    let url = `${DATA_URL}/comments?trainingItemId=${trainingItemId}`;

    return await (await fetch(url)).json();
  }
}

export const DataServiceInstance = new DataService();
