export const EDIT_TEXT = 'EDIT_TEXT';

export function textEdit(index, array, value) {
  array[index]=value;
  return {
    type: EDIT_TEXT,
    payload: array
  }
}

