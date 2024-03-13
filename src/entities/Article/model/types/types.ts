export interface Article {
  id?: number;
  title: string;
  subtitle: string;
  img?: string;
  views?: number;
  createdAt: string;
  userId?: string;
  type?: string[];
  paragraphs?: string;
}
