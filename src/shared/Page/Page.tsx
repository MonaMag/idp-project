import React, { memo, ReactNode } from "react";
import { classNames } from "../classNames/classNames";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { className, children } = props;

  return (
    <main className={classNames(cls.page, {}, [className])}>{children}</main>
  );
});
