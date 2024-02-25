import { FC } from 'react';
import { Page } from '../../shared/Page/Page';
import { classNames } from '../../shared/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { useGetArticlesQuery } from '../../entities/Article/api/articlesApi';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const { data = [], isLoading } = useGetArticlesQuery(null);

  return (
    <Page className={cls.articlesPage}>
      <div className={classNames(cls.content, {}, [className])}>
        {data.map((item) => (
          <div className={cls.title}>{item.title}</div>
        ))}
      </div>
    </Page>
  );
};
