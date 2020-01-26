import {CHECKING_ANSWERS} from "./action";

let defaultState = {
  visible: false,
  questions: [
    {
      text: 'Операторы сравнение JS',
      answer: '===,<,>,<>',
      mistake: false
    },
    {
      text: 'Конструктор для создания даты',
      answer: 'Date',
      mistake: false
    },
    {
      text: 'Метод удаления элементов из массива',
      answer: 'slice,delete,shift',
      mistake: false
    },
    {
      text: 'Метод добавления элемента в конец массива',
      answer: 'push',
      mistake: false
    },
    {
      text: 'Свойство, показывающее длину массива',
      answer: 'length',
      mistake: false
    }
  ]
};

let reducerQuestions = (state = defaultState, action) => {
  switch (action.type) {
    case CHECKING_ANSWERS:
      let {visible, questions} = action.payload;

      return {
        visible,
        questions
      }
    default:
      return {...state}
  }
  return {...state}
};
export default reducerQuestions
