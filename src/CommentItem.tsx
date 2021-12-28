export interface CommentItem {
  // Identificator of comment
  id?: number;

  // Identificator of training item
  trainingItemId: number;

  // Comment text
  text: string;
}
