import React from 'react';
// We'll need to import all those action creators.
import { updateInput } from './navBarsActions';
import { updateCityDescription } from '../CityInfo/cityInfoActions';
import { updateHistory } from '../SearchHistory/searchHistoryActions'

export default class NavBars extends React.Component {
  constructor(props) {
    super(props);

    // Here we're binding these methods to the context
    // of the components. This only has to be done,
    // because these methods are called back by
    // event emitters (which lose context).
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleJapan = this.handleJapan.bind(this);
    this.handleSD = this.handleSD.bind(this);
    this.handleNY = this.handleNY.bind(this);
    this.handleDC = this.handleDC.bind(this);
    this.handleLondon = this.handleLondon.bind(this);
  }
handleSD(event){
  const{dispatch} = this.props;
  dispatch(updateCityDescription('San Diego'))
}

handleNY(event){
  const{dispatch} = this.props;
  dispatch(updateCityDescription('New York'))
}
handleDC(event){
  const{dispatch} = this.props;
  dispatch(updateCityDescription('Washington D.C'))
}

handleLondon(event){
  const{dispatch} = this.props;
  dispatch(updateCityDescription('London'))
}

handleJapan(event){
  const{dispatch} = this.props;
  dispatch(updateCityDescription('Japan'))
}

handleInput(event) {
  const { dispatch } = this.props;
  const { value } = event.target;
  dispatch(updateInput(value));
  }

handleClick(event) {
  const { dispatch, input, date, time } = this.props;
  dispatch(updateCityDescription(input));
  dispatch(updateHistory(input, date, time));
}
render(){
  const { input } = this.props;
  return (
  <nav className='navbar navbar-default'>
   <div className='container-fluid'>
    <div className='btn-group'>
        <button onClick={this.handleSD} type='button' className='btn btn-primary'>San Diego</button>
        <button onClick={this.handleNY} type='button' className='btn btn-primary'>New York</button>
        <button onClick={this.handleDC} type='button' className='btn btn-primary'>Washington D.C</button>
        <button onClick={this.handleLondon} type='button' className='btn btn-primary'>London</button>
        <button onClick={this.handleJapan} type='button' className='btn btn-primary'>Tokyo</button>
     </div>
      <div className='input-group'>
        <input type='text' className='form-control'value={input} 
        onChange={this.handleInput} placeholder='Please Enter City Name here'></input>
        <span className="input-group-btn">
        <button className='btn btn-secondary' type='button' onClick={this.handleClick}>Go</button>
        </span>
       </div>
    </div>
   </nav>
      );
  }

}