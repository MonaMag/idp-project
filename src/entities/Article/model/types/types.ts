export interface Article {
  id?: number;
  title: string;
  subtitle?: string;
  img?: string;
  views?: number;
  createdArt?: string;
  userId?: string;
  type: string;
  paragraph: string;
  bibliography?: string;
  direction?: string;
  countries?: string[];
}
