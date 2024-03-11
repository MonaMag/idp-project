import { ArticleBlockType } from '../consts/consts';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

/*export interface Article {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  userId: number;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}*/

export interface Article {
  id?: number;
  title: string;
  subtitle: string;
  img?: string;
  views?: number;
  createdAt: string;
  userId?: string;
  type?: string[];
  blocks?: {
    id?: string;
    type?: string;
    title?: string;
    paragraphs?: string[];
    code?: string;
    src?: string;
  }[];
}
