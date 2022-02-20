import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import {Indicator} from './Indicator';
import { SwipeDirection } from './Swipeable';
import { canGoNext, canGoPrevious, getIndexForAction, matchBreakpoint } from './helpers';
import { Pagination } from './Pagination';
import { Arrow } from './Arrow';

export type CarouselConfig = {
    slidesToShow?: number;
    center?: boolean;
    centerPadding?: number;
    infinite?: boolean;
    showIndicator?: boolean;
    showPagination?: boolean; 
    showArrows?: boolean;
    swipeable?: boolean;
    scaleOnFocus?: number;
};

export type Breakpoint = {
    size: number;
    settings: CarouselConfig;
};

export type CarouselProps = CarouselConfig & {
    breakpoints?: Breakpoint[];
};

const StyledCarousel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

const StyledSlider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Carousel: React.FC<CarouselProps & { debug?: boolean }> = ({
    showIndicator = true,
    showArrows = true,
    swipeable = true,
    slidesToShow = 1,
    centerPadding = 0,
    scaleOnFocus = 1,
    showPagination = false,
    breakpoints,
    center,
    infinite,
    debug,
    children,
}) => {
    const childrenCount = React.Children.count(children);
    const carouselSettings = {
        center,
        infinite,
        slidesToShow,
        showArrows,
        showIndicator,
        showPagination,
        swipeable,
        centerPadding,
        scaleOnFocus,
    };
    const [activeSettings, setActiveSettings] = useState(
        matchBreakpoint(window.innerWidth, carouselSettings, breakpoints),
    );
    const [{ previousActive, active, infiniteActive }, setActive] = useState({
        previousActive: 0,
        active: 0,
        infiniteActive: 0,
    });

    return (
        <StyledCarousel>
            <StyledSlider>
                {/* {activeSettings.showArrows && (
                    <Arrow
                        type={ArrowType.previous}
                        onClick={() => setActive(getIndexForAction(active, active - 1, childrenCount))}
                        disabled={!canGoPrevious(active, activeSettings.infinite)}
                    />
                )} */}
                {activeSettings.showIndicator && (
                  <Indicator
                  items={childrenCount}
                  slidesToShow={activeSettings.slidesToShow || slidesToShow}
                  infinite={activeSettings.infinite}
                  active={infiniteActive}
                  onClick={index => setActive(getIndexForAction(active, index, childrenCount))}
              />
                )}
                <Slider
                    previousActive={previousActive}
                    active={active}
                    infiniteActive={infiniteActive}
                    onWindowResize={() =>
                        setActiveSettings(matchBreakpoint(window.innerWidth, carouselSettings, breakpoints))
                    }
                    debug={debug}
                    onSwipe={(direction: SwipeDirection) => {
                        let newActive = active;

                        if (
                            direction === SwipeDirection.Left &&
                            canGoNext(
                                active,
                                childrenCount,
                                activeSettings.slidesToShow || slidesToShow,
                                activeSettings.infinite,
                            )
                        ) {
                            newActive = active + 1;
                        } else if (
                            direction === SwipeDirection.Right &&
                            canGoPrevious(active, activeSettings.infinite)
                        ) {
                            newActive = active - 1;
                        }

                        setActive(getIndexForAction(active, newActive, childrenCount));
                    }}
                    {...activeSettings}
                >
                    {children}
                </Slider>
                {/* {activeSettings.showArrows && (
                    <Arrow
                        type={ArrowType.next}
                        onClick={() => setActive(getIndexForAction(active, active + 1, childrenCount))}
                        disabled={
                            !canGoNext(
                                active,
                                childrenCount,
                                activeSettings.slidesToShow || slidesToShow,
                                activeSettings.infinite,
                            )
                        }
                    />
                )} */}
            </StyledSlider>
            {activeSettings.showPagination && (
              <Pagination 
                  items={childrenCount}
                  slidesToShow={activeSettings.slidesToShow || slidesToShow}
                  infinite={activeSettings.infinite}
                  active={infiniteActive}
                  onClick={index => setActive(getIndexForAction(active, index, childrenCount))}>
                  <Arrow
                        type="PREVIOUS"
                        onClick={() => setActive(getIndexForAction(active, active - 1, childrenCount))}
                        disabled={!canGoPrevious(active, activeSettings.infinite)}
                  />
                 <Arrow
                        type="NEXT"
                        onClick={() => setActive(getIndexForAction(active, active + 1, childrenCount))}
                        disabled={
                            !canGoNext(
                                active,
                                childrenCount,
                                activeSettings.slidesToShow || slidesToShow,
                                activeSettings.infinite,
                            )
                        }
                    />
              </Pagination>
            )}
            {/* {activeSettings.showIndicator && (
                <Indicator
                    items={childrenCount}
                    slidesToShow={activeSettings.slidesToShow || slidesToShow}
                    infinite={activeSettings.infinite}
                    active={infiniteActive}
                    onClick={index => setActive(getIndexForAction(active, index, childrenCount))}
                />
            )} */}
        </StyledCarousel>
    );
};
