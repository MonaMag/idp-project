import { FC, useCallback, useEffect, useState } from 'react';
import { Button, Input, Select } from 'antd';
import { Page } from '../../shared/Page/Page';
import { classNames } from '../../shared/classNames/classNames';
import { ArticlesList } from '../../entities/Article/ui/ArticlesList';
import {
  useAddArticleMutation,
  useGetArticlesQuery,
  useRemoveArticleMutation,
  useUpdateArticleMutation,
} from '../../entities/Article/api/articlesApi';
import cls from './ArticlesPage.module.scss';
import { Article } from '../../entities/Article/model/types/types';
import { useNavigate } from 'react-router-dom';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const [limit, setLimit] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('Article');

  const { data, isLoading, error } = useGetArticlesQuery();
  const [addArticle, {}] = useAddArticleMutation();
  const [removeArticle, {}] = useRemoveArticleMutation();
  const [updateArticle, {}] = useUpdateArticleMutation();

  const navigate = useNavigate()

  const handleRemove = useCallback(async (id: number) => {
    console.log('id: ', id);
    await removeArticle(id)
  }, [removeArticle])

  const handleUpdate = useCallback((article: Article) => {
    updateArticle(article);
  }, [updateArticle])

  useEffect(() => {
    console.log('DATA', data);
  }, [data]);

  const handleAddArticle = async () => {
    if (title) {
      console.log('title')
      // await addArticle({
      //   id: 22,
      //   title: title,
      //   subtitle: subtitle,
      // });
    }
  };

  //console.log('articlesApi', articlesApi);
  const handleChangeSelect = (value: string) => {
    setLimit(value);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks

  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }

  return (
    <Page className={cls.articlesPage}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.header}>
          <Input
            type="text"
            value={title}
            className={cls.input}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button onClick={handleAddArticle}>Добавить статью</Button>
          <Select className={cls.select} defaultValue={limit} onChange={handleChangeSelect}>
            <Select.Option value="">все</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="8">8</Select.Option>
          </Select>
        </div>
        <ArticlesList
          articles={data || []}
          isLoading={isLoading}
          handleDelete={handleRemove}
          handleUpdate={handleUpdate}
        />
      </div>
    </Page>
  );
};
