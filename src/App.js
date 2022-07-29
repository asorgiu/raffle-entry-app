import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import EntryDetails from './EntryDetails';
import NotFound from './404';
import About from './About';
import YouTubeCounter from './components/YouTube/YouTubeCounter';
import YouTubeLogin from './components/YouTube/YouTubeLogin';
import YouTubeSubscribe from './components/YouTube/YouTubeSubscribe';
import Subscribe from './components/YouTube/Subscribe';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

// surround app with router so all child components can use it
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <YouTubeCounter />
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/entries/:id">
              <EntryDetails />
            </Route>
            <Route path="/youtube">
              <YouTubeLogin />
              {/* <YouTubeSubscribe
                channelId={process.env.REACT_APP_YOUTUBE_CHANNEL_ID}
                theme={'default'}
                layout={'full'}
                count={'default'}
              /> */}
            </Route>
            <Route path="/subscribe">
              <Subscribe />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
