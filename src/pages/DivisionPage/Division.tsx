import {FC} from "react";
import {Page} from "../../shared/Page/Page";
import {classNames} from "../../shared/classNames/classNames";
import cls from "./Division.module.scss";


interface DivisionProps {
  className?: string;
}

export const Division: FC<DivisionProps> = ({ className }) => {
  return (
    <Page className={cls.division}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.title}>Деление</div>
        <div className={cls.table}>Карточки</div>
      </div>
    </Page>
  );
};
