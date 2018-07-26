import { types} from './searchHistoryActions';

const defaultState ={
    name: ' ',
    historyList: []

};

export default function searchHistoryReducer (state = defaultState, action){
    const {type, payload} = action;

    switch(type){
        case types.UPDATE_HISTORY: {
            const { name, date, time} = action.payload;
            return{
                historyList:[
                ...state.historyList,
                {name, date, time}
                ]
            }
        }
        default: {
            return state;
        }
    }
}