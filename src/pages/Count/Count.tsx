import {FC} from "react";
import {Page} from "../../shared/Page/Page";
import {classNames} from "../../shared/classNames/classNames";
import cls from "./Count.module.scss";


interface CountProps {
  className?: string;
}

export const Count: FC<CountProps> = ({ className }) => {
  return (
    <Page className={cls.count}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.title}>Сложение и вычитание</div>
        <div className={cls.cards}>Карточки</div>
      </div>
    </Page>
  );
};
