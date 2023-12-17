import {FC} from "react";
import {Page} from "../../shared/Page/Page";
import {classNames} from "../../shared/classNames/classNames";
import cls from "./MainPage.module.scss";


interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <Page className={cls.mainPage}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.title}>Главная страница</div>
        <div className={cls.cards}>О нас</div>
      </div>
    </Page>
  );
};
