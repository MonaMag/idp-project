import React, { useCallback, memo, MouseEvent } from 'react';
import { Article } from '../model/types/types';
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './ArticlesList.module.scss';
import { AppLink } from '../../../shared/AppLink/AppLink';
import { EditOutlined, DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';

interface ArticleItemProps {
  className?: string;
  article: Article;
  remove: (id: number) => void;
  update: (article: Article) => void;
}

export const ArticleItem = memo(({ article, remove, update }: ArticleItemProps) => {
  const handleRemove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (article.id) {
        remove(article.id);
      }
    },
    [article],
  );

  const handleUpdate = useCallback(
    (event: React.MouseEvent) => {
      const title = prompt() || '';
      console.log('title', title);
      update({ ...article, title: title });
    },
    [article],
  );

  return (
    <div className={classNames(cls.content, {}, [])}>
      <Card
        hoverable
        onClick={handleUpdate}
        className={cls.card}
        /*cover={<img alt={article.title} src={article.img} style={{ height: 250 }} />}*/
        actions={[
          <EditOutlined key="edit" />,
          <DeleteOutlined key="ellipsis" onClick={handleRemove} />,
          <AppLink to={`/articles/${article.id}`} className={cls.link}>
            <EllipsisOutlined key="ellipsis" />
          </AppLink>,
        ]}
      >
        <Meta
          title={article.title}
          description={
            <div className={cls.description}>
              <p className={cls.descriptionTitle}>{article.subtitle}</p>
              <p>{article.paragraphs}</p>
              <span className={cls.date}>{article.createdAt}</span>
            </div>
          }
        />
        {/*<Button onClick={handleRemove}>Удалить</Button>*/}
      </Card>
    </div>
  );
});
