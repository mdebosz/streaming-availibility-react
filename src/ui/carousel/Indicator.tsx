import React from 'react';
import styled from 'styled-components';
import { colors } from 'ui/pallete';

type IndicatorProps = {
    items: number;
    slidesToShow: number;
    infinite?: boolean;
    active: number;
    onClick: (index: number) => void;
};

export const StyledIndicatorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 12px;
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 1;
    transform: translateY(-80%);
`;

export const StyledIndicator = styled.span<{ highlighted: boolean }>`
    width: auto;
    height: auto;
    border-radius: 0;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    opacity: 1;
    padding: 10px 0; 
   
    &::before {
      clip-path: ${props => props.highlighted ? 'inset(0 0% 0 0% round 8px)' : 'inset(0 20% 0 20% round 8px)'};
      background-color: ${props => props.highlighted ? colors.white : colors.white05op};
      opacity: 1;
      width: 32px;
      height: 2px;
      display: block;
      content: "";
      will-change: clip-path,opacity;
      transition: clip-path 0.7s cubic-bezier(0.2, 1, 0.2, 1),opacity 0.15s ease-in-out;
    }
`;

const getNumberOfIndicators = (items: number, slidesToShow: number, infinite?: boolean) => {
    if (infinite || slidesToShow < items) {
        return items;
    }

    return 1;
};

export const Indicator: React.FC<IndicatorProps> = ({ items, slidesToShow, infinite, active, onClick }) => {
    return (
        <StyledIndicatorWrapper>
            {[...Array(getNumberOfIndicators(items, slidesToShow, infinite))].map((e, i) => (
                <StyledIndicator
                    key={`carousel-indicator-${i}`}
                    data-testid={`carousel-indicator-${i}`}
                    highlighted={i === active % items}
                    onClick={() => onClick(i)}
                />
            ))}
        </StyledIndicatorWrapper>
    );
};
