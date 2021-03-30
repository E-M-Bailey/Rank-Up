import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './App.css';
import BusinessForm from './components/BusinessForm/BusinessForm'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import EstimateRating from './components/EstimateRating/EstimateRating';
import { loadInfo } from './features/form'
import { useDispatch } from 'react-redux'

function App() {
  const { loaded } = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadInfo());

  }, []);

  return (
     loaded && (<Router>
      <div className="App">
        <Header />
        <div className="main-body">
          <Switch>
            <Route path="/rating">
              <EstimateRating />
            </Route>
            <Route path="/">
              <BusinessForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>)
  );
}

export default App;
