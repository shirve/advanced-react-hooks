export const initialState: {
  text: string
  color: string
} = {
  text: '',
  color: 'black',
}

type Action =
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'CLEAR_TEXT' }
  | { type: 'CHANGE_COLOR'; payload: string }

const exampleReducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
      }
    case 'CLEAR_TEXT':
      return initialState
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
      }
    default:
      return state
  }
}

export default exampleReducer
