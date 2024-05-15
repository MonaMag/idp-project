import React, { memo, useCallback } from 'react';
import { Article } from '../model/types/types';
import { Card, Popconfirm } from 'antd';
import Meta from 'antd/es/card/Meta';
import { classNames } from '../../../shared/classNames/classNames';
import cls from './ArticlesList.module.scss';
import { AppLink } from '../../../shared/AppLink/AppLink';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

interface ArticleItemProps {
  className?: string;
  article: Article;
  remove: (id: number) => void;
  update: (article: Article) => void;
}

export const ArticleItem = memo(({ article, remove, update }: ArticleItemProps) => {
  console.log('ARTICLE', article);

  const handleRemove = useCallback(() => {
    console.log('REMOVE');
    //event.stopPropagation();
    if (article.id) {
      remove(article.id);
    }
  }, [article]);

  const handleUpdate = useCallback(
    (event: React.MouseEvent) => {
      const title = prompt() || '';
      console.log('title', title);
      update({ ...article, title: title });
    },
    [article],
  );

  const renderTypeContent = (type: string) => {
    switch (type) {
      case 'IT':
        return <div className={cls.date}>{article.direction}</div>;
        break;
      case 'ECONOMICS':
        return <div className={cls.date}>{article.countries}</div>;
        break;
      case 'SCIENCE':
        return <div className={cls.date}>{article.bibliography}</div>;
        break;
    }
  };

  return (
    <div className={classNames(cls.content, {}, [])}>
      <Card
        hoverable
        className={cls.card}
        actions={[
          <EditOutlined key="edit" onClick={handleUpdate} />,
          <Popconfirm
            title="Вы уверены, что хотите удалить статью?"
            okText="Yes"
            cancelText="No"
            onConfirm={handleRemove}
          >
            <DeleteOutlined key="ellipsis" />
          </Popconfirm>,
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
              <p>{article.paragraph}</p>
              <div className={cls.date}>{article.createdArt}</div>
              <div className={cls.date}>{renderTypeContent(article.type)}</div>
            </div>
          }
        />
      </Card>
    </div>
  );
});
