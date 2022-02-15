import styled from "styled-components";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { colors } from "ui/pallete";
import { Link } from "react-router-dom";
import { Button } from "ui/atoms/Button";
import React, { ComponentType } from "react";

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: stretch
`;

const HeaderContainer = styled.div`
  background-color: ${colors.dark05op};
`;

const HeaderIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  line-height: 20px;
  color: ${colors.white};
  cursor: pointer;
  margin-right: 30px;

  :hover {
    color: ${colors.brand};
  }
`

const Avatar = styled.div`
  background-color: ${colors.white};
  width: 36px;
  height: 36px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: stretch;

  a {
    color: ${colors.white};
    background-color: ${colors.transparent};
    border-color: ${colors.transparent};
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 10px;

    &:hover {
      color: ${colors.white};
      background-color: ${colors.hover};
    }

    &:active {
      color: ${colors.white};
      background-color: ${colors.active};
    }
  }
`;

export const AppHeader: React.FC = () => {
  return (
    <Header>
      <HeaderContainer className="flex-1 mx-4 mt-2 flex flex-row items-center px-8 py-4 rounded-[10px]">
        <div className="flex">
          <HeaderIcon icon={faEllipsisVertical}></HeaderIcon>
        </div>
        <HeaderNav className="mx-auto">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/watched">Watched</Link>
          <Link to="/watch-list">Watchlist</Link>
        </HeaderNav>
        <div className="flex items-center">
          <HeaderIcon icon={faMagnifyingGlass}></HeaderIcon>
          <Button variant="OUTLINED">Join Now</Button>
          <Avatar className="ml-4"></Avatar>
        </div>
      </HeaderContainer>
    </Header>
  );
};
