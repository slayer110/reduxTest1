export const CHECKING_ANSWERS = 'CHECKING_ANSWERS';

export function checkingAnswer(arrAnswers, arrQuestins, visible) {
  visible = true;
  arrQuestins = [...arrQuestins];
  for (let k = 0; k < arrQuestins.length; k++) {
    if (arrAnswers[k] !== arrQuestins[k].answer) {
      arrQuestins[k].mistake = true
    }
  }
  return {
    type: CHECKING_ANSWERS,
    payload: {questions: arrQuestins, visible: visible}
  }
}
