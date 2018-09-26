export const initialState = {
  user: {
    name: 'Максим',
    surname: 'Дмитриев',
    age: 29
  }
};

export function rootReducer(state = initialState) {
  return state;
}
