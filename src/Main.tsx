import { Home } from "components/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchGenresThunk } from "redux-store/genres/thunks";
import { AppHeader } from "ui/app/AppHeader";
import { AppMain } from "ui/app/AppMain";

export const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchGenresThunk()
    );
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <AppHeader />
      <AppMain>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </AppMain>
    </div>
  );
};
