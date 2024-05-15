import { FC, useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
import { Page } from '../../shared/Page/Page';
import { classNames } from '../../shared/classNames/classNames';
import { ArticlesList } from '../../entities/Article/ui/ArticlesList';
import {
  useGetArticlesQuery,
  useRemoveArticleMutation,
  useUpdateArticleMutation,
} from '../../entities/Article/api/articlesApi';
import cls from './ArticlesPage.module.scss';
import { Article } from '../../entities/Article/model/types/types';
import { AddArticleModal } from '../../feature/AddArticle/AddArticleModal';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const [limit, setLimit] = useState('');
  //const [title, setTitle] = useState('');
  //const [subtitle, setSubtitle] = useState('Article');

  const { data, isLoading, error } = useGetArticlesQuery(limit);
  //const [addArticle, {}] = useAddArticleMutation();
  const [removeArticle, {}] = useRemoveArticleMutation();
  const [updateArticle, {}] = useUpdateArticleMutation();

  //const navigate = useNavigate();

  const handleRemove = useCallback(
    async (id: number) => {
      console.log('id: ', id);
      await removeArticle(id);
    },
    [removeArticle],
  );

  const handleUpdate = useCallback(
    (article: Article) => {
      updateArticle(article);
    },
    [updateArticle],
  );

  useEffect(() => {
    console.log('DATA', data);
  }, [data]);

  /*  const handleAddArticle = async () => {
    if (title) {
      console.log('title');
      await addArticle({
        title: title,
        subtitle: subtitle,
        createdArt: new Date().toLocaleString(),
      });
    }
  };*/

  const handleChangeSelect = (value: string) => {
    setLimit(value);
  };

  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }

  return (
    <Page className={cls.articlesPage}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.header}>
          <AddArticleModal />
          <Select className={cls.select} value={limit} onChange={handleChangeSelect}>
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
