import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { AppLink } from "../../shared/AppLink/AppLink";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  let location = useLocation();

  return (
    <aside className={cls.sidebar}>
      <div className={cls.sidebarContent}>
        <img src={logo} alt="logo" className={cls.logoMath} />
        <div className={cls.links}>
          <AppLink to={"/count"} className={cls.link}>
            <span>Счет чисел</span>
          </AppLink>

          <AppLink to={"/multiplication"} className={cls.link}>
            Умножение
          </AppLink>

          <AppLink to={"/division"} className={cls.link}>
            Деление
          </AppLink>
        </div>
      </div>

      <div className={cls.footer}>
        <button className={cls.btn}>Настройки</button>
        <button className={cls.btn}>Выйти</button>
      </div>
    </aside>
  );
};
