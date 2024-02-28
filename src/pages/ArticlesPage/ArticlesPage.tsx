import { FC, useState } from 'react';
import { Button, Select } from 'antd';
import { Page } from '../../shared/Page/Page';
import { classNames } from '../../shared/classNames/classNames';
import { ArticlesList } from '../../entities/Article/ui/ArticlesList';
import { useGetArticlesQuery } from '../../entities/Article/api/articlesApi';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  const [count, setCount] = useState('');
  const { data = [], isLoading, error } = useGetArticlesQuery(count);

  if (error) {
    return <p>Ошибка при загрузке статей</p>;
  }

  const handleChangeSelect = (value: string) => {
    setCount(value);
    console.log(`selected ${value}`);
  };

  return (
    <Page className={cls.articlesPage}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.header}>
          <Button onClick={() => console.log('New article')}>Добавить статью</Button>
          <Select className={cls.select} defaultValue={count} onChange={handleChangeSelect}>
            <Select.Option value="">все</Select.Option>
            <Select.Option value="4">4</Select.Option>
            <Select.Option value="8">8</Select.Option>
          </Select>
        </div>
        <ArticlesList articles={data} isLoading={isLoading} />
      </div>
    </Page>
  );
};
