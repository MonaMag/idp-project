import React from 'react';
import { Article } from '../model/types/types';
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { classNames } from '../../../shared/classNames/classNames';
import cls from '../../../pages/MainPage/MainPage.module.scss';

interface ArticleItemProps {
  className?: string;
  article: Article;
  remove: (article: Article) => void;
  update: (article: Article) => void;
}

export const ArticleItem = ({ article, remove, update }: ArticleItemProps) => {
  //console.log('article', article);

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(article);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || '';
    console.log('title', title);
    update({ ...article, title: title });
  };

  return (
    <div className={classNames(cls.content, {}, [])}>
      <Card
        hoverable
        onClick={handleUpdate}
        style={{ width: 240, margin: 10, backgroundColor: 'beige' }}
        /*cover={<img alt={article.title} src={article.img} style={{ height: 250 }} />}*/
        /*actions={[
          <EditOutlined key="edit" />,
          <DeleteOutlined key="ellipsis" onClick={handleRemove} />,
          <AppLink to={`/articles/${article.id}`} className={cls.link}>
            <EllipsisOutlined key="ellipsis" />
          </AppLink>,
        ]}*/
      >
        <Meta title={article.title} description={article.subtitle} />
        <Button onClick={handleRemove}>Удалить</Button>
      </Card>
    </div>
  );
};
