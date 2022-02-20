import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesThunk } from 'redux-store/movies/thunks';
import { selectMoviesLoading, selectMoviesWithGenres } from 'redux-store/selectors';
import { MovieCard } from 'ui/molecules';
import { Carousel } from 'ui/carousel/Carousel';
import { WithLoading } from 'ui/molecules/WithLoading';
import { selectGenresLoading } from '../redux-store/selectors';

export const Home: React.FC = () => {
  const movies = useSelector(state => selectMoviesWithGenres(state));
  const genresLoading = useSelector(state => selectGenresLoading(state));
  const moviesLoading = useSelector(state => selectMoviesLoading(state))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMoviesThunk({
        country: "us",
        service: "netflix",
        genre: "18",
        page: "1",
        output_language: "en",
        language: "en",
      })
    );
  }, [dispatch]);

  const carouselChildren = (movies?.map((movie) => <div className="block"><MovieCard key={movie.imdbID} {...movie}></MovieCard></div>))

  const movieCarousel = WithLoading(
    Carousel
  )({
    loading: genresLoading || moviesLoading,
    center: true,
    infinite: false,
    showArrows: false,
    showIndicator: true,
    showPagination: true,
    slidesToShow: 1,
    children: carouselChildren
  }, )

  return (
    movieCarousel
  )
}
