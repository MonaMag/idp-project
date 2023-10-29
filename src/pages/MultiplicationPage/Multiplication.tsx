import {FC} from "react";
import {Page} from "../../shared/Page/Page";
import {classNames} from "../../shared/classNames/classNames";
import cls from "./Multiplication.module.scss";


interface MultiplicationProps {
  className?: string;
}

export const Multiplication: FC<MultiplicationProps> = ({ className }) => {
  return (
    <Page className={cls.multiplication}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.title}>Умножение</div>
        <div className={cls.table}>Карточки</div>
      </div>
    </Page>
  );
};
