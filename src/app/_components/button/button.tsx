import { Size } from "../types";
import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};
export const Button: React.FC<ButtonProps> = ({
  variant,
  size = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست ....",
  type = "button",
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    className,
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-event-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { [`${shapeClasses[shape]}`]: shape }
  );
  return (
    <button className={classes} type={type} disabled={isDisabled} {...rest}>
      {isDisabled ? loadingText : children}
    </button>
  );
};