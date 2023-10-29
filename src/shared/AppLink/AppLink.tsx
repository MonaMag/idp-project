import { Link, LinkProps, useMatch } from "react-router-dom";
import { memo, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import { classNames, Mods } from "../classNames/classNames";

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  to: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, ...otherProps } = props;

  const match = useMatch(to);
  const active = match ? cls.active : "";

  const mods: Mods = {
    [active]: active,
  };

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, mods, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
