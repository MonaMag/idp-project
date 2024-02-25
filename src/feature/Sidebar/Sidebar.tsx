import React from 'react';
import { Button } from 'antd';
import logo from '../../assets/logo/logo.png';
import { AppLink } from '../../shared/AppLink/AppLink';
import { ReactComponent as MainIcon } from '../../assets/icons/main-20-20.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile-20-20.svg';
import { ReactComponent as ArticleIcon } from '../../assets/icons/article-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cls.sidebar}>
      <div className={cls.sidebarContent}>
        <img src={logo} alt="logo" className={cls.logoMath} />
        <div className={cls.links}>
          <AppLink to={'/main'} className={cls.link}>
            <MainIcon className={cls.icon} />
            <span className={cls.linkText}>Главная</span>
          </AppLink>

          <AppLink to={'/profile'} className={cls.link}>
            <ProfileIcon className={cls.icon} /> <span className={cls.linkText}>Профиль</span>
          </AppLink>

          <AppLink to={'/articles'} className={cls.link}>
            <ArticleIcon className={cls.icon} /> <span className={cls.linkText}>Статьи</span>
          </AppLink>
        </div>
      </div>

      <div className={cls.footer}>
        <Button className={cls.btn}>Настройки</Button>
      </div>
    </aside>
  );
};
