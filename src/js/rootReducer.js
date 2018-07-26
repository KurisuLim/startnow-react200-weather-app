
import { combineReducers } from 'redux';
import cityInfoReducer from './components/CityInfo/cityInfoReducer';
import navBarsReducer from './components/NavBars/navBarsReducer';
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer'

const rootReducer = combineReducers({
    info: cityInfoReducer,
    navbars: navBarsReducer,
    history: searchHistoryReducer

});

export default rootReducer;