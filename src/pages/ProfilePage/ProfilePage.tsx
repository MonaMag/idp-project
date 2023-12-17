import {FC} from "react";
import {Page} from "../../shared/Page/Page";
import {classNames} from "../../shared/classNames/classNames";
import cls from "./ProfilePage.module.scss";


interface ProfilePageProps {
  className?: string;
}

export const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  return (
    <Page className={cls.profilePage}>
      <div className={classNames(cls.content, {}, [className])}>
        <div className={cls.title}>Profile</div>
        <div className={cls.table}>Карточки</div>
      </div>
    </Page>
  );
};
