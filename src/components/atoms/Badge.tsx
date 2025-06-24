import type * as TYPES from "../../types";
import css from "./Badge.module.scss";

const Badge = ({
  bgColor = "#757eff1",
  color = "#fff",
  children,
  className,
  style,
  ...rest
}: TYPES.Badge) => {
  const classList = `${css.badge}${className ? ` ${className}` : ""}`;
  return (
    <span
      className={classList}
      style={{ backgroundColor: bgColor, color: color, ...style }}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Badge;
