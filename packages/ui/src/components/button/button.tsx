// The Gatsby build needs this import.
// eslint-disable-next-line no-redeclare
import * as React from "react";
import { getContrast } from "../../utils";

type ButtonProps = {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  backgroundColor,
}) => {
  const clx: React.CSSProperties = {
    fontSize: primary ? "14px" : "12px",
    padding: primary ? "10px 20px" : "8px 16px",
    backgroundColor: backgroundColor
      ? backgroundColor
      : primary
        ? "blue"
        : "white",
    color: backgroundColor
      ? getContrast(backgroundColor)
      : primary
        ? "white"
        : "blue",
  };

  return (
    <button style={clx} type="button" data-color={backgroundColor}>
      {label}
    </button>
  );
};
