import { FC } from 'react';
import { Page } from '../../shared/Page/Page';
import { classNames } from '../../shared/classNames/classNames';
import cls from '../ArticlesPage/ArticlesPage.module.scss';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const params = useParams();
  const articleId = params.id;
  return (
    <Page className={cls.articlesPage}>
      <div className={classNames(cls.content, {}, [className])}>{articleId}</div>
    </Page>
  );
};
