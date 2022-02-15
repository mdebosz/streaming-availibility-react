import { CSSProperties } from "react"
import styled from "styled-components";
import { colors } from "ui/pallete"

type ButtonVariants = "PRIMARY" | "SECONDARY" | "OUTLINED";

type ButtonStyles = Required<
& Pick<CSSProperties, "color" | "backgroundColor" | "borderColor"| "borderRadius" | "fontSize" | "fontWeight" |"padding">
& { "hoverBackgroundColor": CSSProperties['backgroundColor'], "hoverColor"?: CSSProperties['color'] }>

export type Pallete<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles
}

const styles: Pallete<ButtonVariants, ButtonStyles> = {
  PRIMARY: {
    color: colors.white,
    backgroundColor: colors.brand,
    borderColor: colors.brand,
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    hoverBackgroundColor: colors.white,
    hoverColor: colors.black,
    padding: "16px 35px"
  },
  SECONDARY: {
    color: colors.white,
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
    borderRadius: "none",
    fontSize: "16px",
    fontWeight: "600",
    hoverBackgroundColor: colors.transparent,
    hoverColor: colors.brand,
    padding: "16px 35px"
  },
  OUTLINED: {
    color: colors.white,
    backgroundColor: colors.transparent,
    borderColor: colors.white,
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
    hoverBackgroundColor: colors.white,
    hoverColor: colors.black,
    padding: "12px 25px",
  }
}

interface ButtonProps {
  variant?: ButtonVariants;
}

export const Button = styled.button<ButtonProps>`
  margin: 0;
  padding: ${(props) => styles[props.variant!].padding};
  min-width: 4rem;
  white-space: nowrap;
  width: fit-content;
  font-size: ${(props) => styles[props.variant!].fontSize};
  font-weight: ${(props) => styles[props.variant!].fontWeight};
  color: ${( props ) => styles[props.variant!].color};
  background-color: ${( props ) => styles[props.variant!].backgroundColor};
  border: 1px solid ${( props ) => styles[props.variant!].borderColor};
  border-radius: ${(props) => styles[props.variant!].borderRadius};
  appearance: none;
  cursor: pointer;
  transition-duration: 0.2s;

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled,
  &:disabled:hover {
    color: ${colors.white};
  }

  &:enabled:hover {
    color: ${( props ) => styles[props.variant!].hoverColor || styles[props.variant!].color};
    background-color: ${( props ) => styles[props.variant!].hoverBackgroundColor};
    border-color: ${( props ) => styles[props.variant!].hoverBackgroundColor};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
Button.defaultProps = {variant: 'PRIMARY'}
Button.displayName = 'Button'

