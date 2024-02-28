import cls from '../../../pages/MainPage/MainPage.module.scss';
import { classNames } from '../../../shared/classNames/classNames';
import { Article } from '../model/types/types';
import { Card } from 'antd';
import React from 'react';
import Meta from 'antd/es/card/Meta';
import { AppLink } from '../../../shared/AppLink/AppLink';

interface ArticleItemProps {
  className?: string;
  article: Article;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className={classNames(cls.content, {}, [])}>
      <AppLink to={`/articles/${article.id}`} className={cls.link}>
        <Card
          hoverable
          style={{ width: 240, margin: 10, backgroundColor: 'beige' }}
          cover={<img alt={article.title} src={article.img} style={{ height: 250 }} />}
        >
          <Meta title={article.title} description={article.subtitle} />
        </Card>
      </AppLink>
    </div>
  );
};
