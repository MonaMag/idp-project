import cls from '../../../pages/MainPage/MainPage.module.scss';
import { classNames } from '../../../shared/classNames/classNames';

export const ArticlesList = () => {
  return (
    <div className={classNames(cls.content, {}, [])}>
      <div className={cls.title}>Статья 1</div>
      <div className={cls.cards}>Детали</div>
    </div>
  );
};
