import { Switch ,Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() => import("./components/HomePage/HomePage.js" /* webpackChunkName: "HomePage-view" */));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.js' /* webpackChunkName: "MoviesPage-view" */));
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage-view" */))
const NotFound = lazy(() => import('./components/NotFound/NotFound' /* webpackChunkName: "NotFound-view" */));

function App() {

  return (
    < >
      <AppBar/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage/>
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage/>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
   </>
  );
}

export default App;
