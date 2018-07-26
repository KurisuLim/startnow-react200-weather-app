export const types = {
    UPDATE_INPUT: 'UPDATE_INPUT'
  };
  
  export function updateInput(input) {
    return {
      type: types.UPDATE_INPUT,
      payload: {input}
    }
  }