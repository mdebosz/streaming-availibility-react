import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { colors } from "ui/pallete";

export type ArrowType = "PREVIOUS" | "NEXT";

type ArrowProps = {
  type: ArrowType;
  disabled?: boolean;
  onClick: () => void;
};

const StyledArrow = styled.button<Partial<ArrowProps>>`
  width: 40px;
  height: 40px;
  padding: 13px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  background-color: ${(props) => (props.disabled ? colors.background300 : colors.dark)};
  pointer-events: ${(props) => props.disabled ? 'none' : 'initial'};

  &:enabled:hover {
    background-color: ${colors.white};

    svg {
      color: ${colors.dark};
    }
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: ${colors.white}
`

export const Arrow: React.FC<ArrowProps> = (props) => {
  const { type, onClick, disabled } = props;
  return type === "PREVIOUS" ? (
    <StyledArrow
      className="mr-3"
      disabled={disabled}
      onClick={onClick}
    >
      <ArrowIcon icon={faChevronLeft} />
    </StyledArrow>
  ) : (
    <StyledArrow disabled={disabled} onClick={onClick}>
      <ArrowIcon icon={faChevronRight} />
    </StyledArrow>
  );
};
