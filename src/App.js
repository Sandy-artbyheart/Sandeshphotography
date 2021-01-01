import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes';
import Appbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';
import GalleryProvider from './context/GalleryContext/GalleryState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <GalleryProvider>
        <Router>
          <Appbar />
          <Switch>
            {
              routes.map(route => {
                const { path, component: Component } = route
                return (<Route
                  key={path}
                  path={path}
                  exact
                  render={() => (
                    <Suspense fallback={<div>Loading...</div>}>
                      <Component />
                    </Suspense>
                  )}
                />
                )
              })
            }
          </Switch>
        </Router>
      </GalleryProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
