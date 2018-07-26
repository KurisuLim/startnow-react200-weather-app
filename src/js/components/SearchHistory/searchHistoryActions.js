export const types ={
    UPDATE_HISTORY: 'UPDATE_HISTORY'
};

export function updateHistory(name, date, time){
    return {
        type: types.UPDATE_HISTORY,
        payload: {name, date, time}
    }
}