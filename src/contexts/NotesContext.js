import createContexts from './createContexts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'getNotes':
      return action.payload;
    case 'getNote':
      return {
        ...state,
        notes: state.notes.find(note => note.id == action.payload),
      };
    case 'deleteNote':
      return {
        ...state,
        notes: state.notes.filter(note => note.id != action.payload),
      };
    case 'addNote':
      return {
        ...state,
        notes: [...state.notes, {id: state.count, ...action.payload}],
        count: state.count + 1,
      };
    case 'editNote':
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id == action.payload.id) {
            return action.payload;
          } else {
            return note;
          }
        }),
      };
  }
};

const addNote =
  dispatch =>
  async ({title, content}) => {
    dispatch({type: 'addNote', payload: {title, content}});
  };
const deleteNote = dispatch => id => {
  dispatch({type: 'deleteNote', payload: id});
};
const editNote =
  dispatch =>
  async ({id, title, content}) => {
    dispatch({type: 'editNote', payload: {id, title, content}});
  };
const getNote = dispatch => id => {
  dispatch({type: 'getNote', payload: id});
};
const getNotes = dispatch => async () => {
  let notes = await AsyncStorage.getItem('notes');
  if (notes) {
    notes = JSON.parse(notes);
  } else {
    notes = {notes: [], count: 0};
  }
  dispatch({type: 'getNotes', payload: notes});
};

export const {Context, Provider} = createContexts(
  reducer,
  {addNote, deleteNote, editNote, getNote, getNotes},
  {notes: [], count: 0},
);
