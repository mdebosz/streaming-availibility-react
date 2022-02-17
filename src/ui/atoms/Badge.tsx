import { CSSProperties } from "react";
import styled from "styled-components";
import { colors, Pallete } from "ui/pallete";

type BadgeVariants = "WHITE" | "GRAY";

type BadgeStyles = Required<Pick<CSSProperties, "color">>

const styles: Pallete<BadgeVariants, BadgeStyles> = {
  WHITE: {
    color: colors.white
  },
  GRAY: {
    color: colors.text
  }
}

interface BadgeProps {
  variant?: BadgeVariants
}

export const Badge = styled.span<BadgeProps>`
  color: ${(props) => styles[props.variant!].color};
  padding: 4px 10px;
  border-radius: 6px;
  background-color: ${colors.white01op};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6rem;
`;
Badge.defaultProps = {variant: 'WHITE'};
Badge.displayName = 'Badge'
