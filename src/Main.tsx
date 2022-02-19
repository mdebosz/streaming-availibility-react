import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchMoviesThunk } from "redux-store/movies/thunks";
import { AppHeader } from "ui/app/AppHeader";
import { AppMain } from "ui/app/AppMain";

export const Main: React.FC = () => {
  const movies = useSelector((state) => state.movies.data);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     fetchMoviesThunk({
  //       country: "us",
  //       service: "netflix",
  //       genre: "18",
  //       page: "1",
  //       output_language: "en",
  //       language: "en",
  //     })
  //   );
  // }, [dispatch]);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <AppHeader />
      <AppMain>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </AppMain>
    </div>
  );
};
