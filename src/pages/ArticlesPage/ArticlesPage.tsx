import {FC} from "react";
import {Page} from "../../shared/Page/Page";
import {classNames} from "../../shared/classNames/classNames";
import cls from "./ArticlesPage.module.scss";


interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
  return (
    <Page className={cls.articlesPage}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.title}>Статьи</div>
        <div className={cls.table}>Карточки</div>
      </div>
    </Page>
  );
};
