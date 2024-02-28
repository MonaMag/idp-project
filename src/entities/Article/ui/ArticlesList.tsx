import { classNames } from '../../../shared/classNames/classNames';

import cls from './ArticlesList.module.scss';
import { Article } from '../model/types/types';
import { ArticleItem } from './ArticleItem';

interface ArticlesListProps {
  isLoading: boolean;
  articles: Article[];
}

export const ArticlesList = ({ isLoading, articles }: ArticlesListProps) => {
  if (!isLoading && !articles.length) {
    return <div>Статьи не найдены</div>;
  }

  return (
    <div className={classNames(cls.articleList, {}, [])}>
      {articles.map((item) => (
        <ArticleItem article={item} key={item.id} />
      ))}
    </div>
  );
};
