/**
 * Created by Андрей on 25.05.2016.
 */


const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function todos(state = initialState, action) {
  switch(action.type){
    case 'ADD_TODO' : return [{
      id: (state.reduce((maxId, todo)=> {return Math.max(maxId, todo.id)},-1) + 1),
      complete: false,
      text: action.text
    }, ...state]
    default:
      return state
  }
}