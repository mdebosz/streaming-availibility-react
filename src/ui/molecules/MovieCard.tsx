import React, { CSSProperties } from "react";
import { BackdropURLs } from "api/basic-search";
import LazyLoad from "react-lazyload";
import { Badge } from "../atoms/Badge";
import imdbLogo from "assets/imdb.svg";

import styled from "styled-components";
import { colors } from "ui/pallete";
import { Button } from "ui/atoms";

export const ImageOverlay = styled.div`
  background-color: ${colors.black07op};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 1080px;
  pointer-events: none;
}
`;

interface MovieCardProps {
  genres: string[];
  title: string;
  imdbRating: number;
  year: number;
  overview: string;
  cast: string[];
  imdbID: string;
  backdropURLs: BackdropURLs;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const {
    genres,
    title,
    imdbRating,
    imdbID,
    year,
    overview,
    cast,
    backdropURLs,
  } = props;

  const style: CSSProperties = {
    zIndex: 1
  }

  return (
    <div className="flex relative pl-72 flex-col">
      <LazyLoad offset={100}>
        <img
          className="absolute top-0 left-0 object-cover h-[1080px]"
          src={backdropURLs?.original}
          alt={title}
        ></img>
        <ImageOverlay></ImageOverlay>
      </LazyLoad>
      <div className="flex flex-col z-1 mt-96" style={style}>
        <div className="flex">
          {genres?.map((genre) => (
            <Badge className="mr-2" variant="GRAY" key={genre}>
              {genre}
            </Badge>
          ))}
        </div>
        <h2 className="text-5xl font-extrabold text-white mt-3">{title}</h2>
        <div className="my-8 flex">
        <img src={imdbLogo} alt="imdb logo"></img>
        <span className="text-white text-base font-semibold ml-4">{imdbRating / 10}</span>
        <span className="text-white text-base font-semibold ml-4">{year}</span>
        </div>
        <p className="my-8 text-stone-300 font-medium max-w-md text-lg">{overview}</p>
        <div className="text-white flex">
          {cast?.filter((_, index) => index < 3).map((actor) => <span key={actor} className="mr-4">{actor}</span>)}
        </div>
        <div className="flex mt-8 items-center">
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noreferrer noopener"><Button variant="PRIMARY">Watch now</Button></a>
        <a className="ml-3" href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noreferrer noopener"><Button variant="SECONDARY">More details</Button></a>
        </div>
      </div>
    </div>
  );
};
