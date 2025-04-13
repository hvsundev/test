import React from "react";
import { ButtonProps, ButtonSize, ButtonTheme } from "./interface.ts";
import { ButtonWrapper } from "./style.ts";

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "button",
  theme = ButtonTheme.Primary,
  size = ButtonSize.Medium,
  rounded = true,
  disabled = false,
  loading = false,
  leftIcon,
}: ButtonProps) => {
  if (loading) return "로딩 중...";

  return (
    <ButtonWrapper
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      themeStyle={theme}
      rounded={rounded}
      size={size}
    >
      {leftIcon && (
        <img
          src={leftIcon}
          alt=""
          style={{ marginRight: 6, width: 16, height: 16 }}
        />
      )}
      <span>{label}</span>
    </ButtonWrapper>
  );
};

export default Button;
