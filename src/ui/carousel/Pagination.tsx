import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Badge } from 'ui/atoms/Badge';
import { colors } from 'ui/pallete';

type PaginationProps = {
    items: number;
    slidesToShow: number;
    infinite?: boolean;
    active: number;
    onClick: (index: number) => void;
};

export const StyledPaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 12px;
`;

export const StyledPaginationProgress = styled.div`
    height: 2px;
    overflow: hidden;
    background-color: ${colors.border};
    border-radius: 6px;
    width: 100%;
    position: relative;
`

export const StyledPaginationProgressBar = styled.span<{progress: number}>`
    background: ${colors.white};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: left top;
    transform: ${(props) => `translate3d(0px, 0px, 0px) scaleX(${props.progress}) scaleY(1)`};
    transition-duration: 800ms;
`

export const StyledPaginationControls = styled.div`
    display: flex;
    flex-direction: row;
`

export const StyledBadge = styled.span`
    color: ${colors.white};
    padding: 8px 14px;
    border-radius: 6px;
    background-color: ${colors.background300};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.6rem;
`;

const getNumberOfPages = (items: number, slidesToShow: number, infinite?: boolean): number => {
    if (infinite || slidesToShow < items) {
        return items;
    }

    return 1;
};

const getProgress = (items: number, active: number): number => {
  const progress = (active + 1) / items;
  return Math.round(progress * 100) /100;
}

export const Pagination: React.FC<PaginationProps & {children: ReactNode }> = (props) => {
    const {items, slidesToShow, infinite, active, onClick, children} = props;

    return (
        <StyledPaginationWrapper className='container items-center'>
            <StyledBadge>
              <span>{(active+1).toLocaleString(undefined, {minimumIntegerDigits: 2})}</span>
              <span className="mx-2 text-stone-400">
                /
              </span>
              <span className="text-stone-400">
              {getNumberOfPages(items, slidesToShow, infinite).toLocaleString(undefined, {
                minimumIntegerDigits: 2
              })}
              </span>
            </StyledBadge>
            <StyledPaginationProgress className="mx-40">
              <StyledPaginationProgressBar progress={getProgress(items, active)}></StyledPaginationProgressBar>
            </StyledPaginationProgress>
            <StyledPaginationControls>
              {children}
            </StyledPaginationControls>
        </StyledPaginationWrapper>
    );
};
