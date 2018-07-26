import React from 'react';
import NavBars from './components/NavBars';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
        <h1>Origin Weather Application</h1>
        <p>Always know if you'll need an umbrella!</p>
          </div>
          <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <NavBars />
            </div>
          </div>
          <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      
      </div>
    );
  }
}
