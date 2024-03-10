import { FC } from 'react';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './ArticlesList.module.scss';
import { Article } from '../model/types/types';
import { ArticleItem } from './ArticleItem';

interface ArticlesListProps {
  isLoading: boolean;
  articles: Article[];
  handleDelete: (article: Article) => void;
  handleUpdate: (article: Article) => void;
}

export const ArticlesList: FC<ArticlesListProps> = ({
  isLoading,
  articles,
  handleDelete,
  handleUpdate,
}: ArticlesListProps) => {
  if (!isLoading && !articles.length) {
    return <div>Статьи не найдены</div>;
  }

  return (
    <div className={classNames(cls.articleList, {}, [])}>
      {articles.map((item) => (
        <ArticleItem article={item} key={item.id} remove={handleDelete} update={handleUpdate} />
      ))}
    </div>
  );
};
