import React from 'react';
import '../App.css';
import {Question} from "./Question";
import {connect} from "react-redux";
import {textEdit} from "../store/answers/action";
import {checkingAnswer} from "../store/questions/action";

function Root(props) {
  function checking() {
    props.checkingAnswer(props.listAnswers, props.listQuestions, props.visible)
  }
  let getList = () => {
    return props.listQuestions.map((elem, index) => <Question key={index}
                                                              number={index}
                                                              answers={props.listAnswers}
                                                              edit={props.textEdit}
                                                              mistake={elem.mistake}
                                                              visible={props.visible}
                                                              correctAnswer={elem.answer}

    >{elem.text}</Question>)
  };
  return <React.Fragment>
    {getList()}
    <button onClick={() => checking()}>Сдать тест</button>
  </React.Fragment>
}

const mapStateToProps = (state) => {
  return {
    listQuestions: state.Questions.questions,
    listAnswers: state.Answers.answers,
    visible: state.Questions.visible
  }
};

const mapActionToProps = {
  textEdit,
  checkingAnswer
};
export default connect(mapStateToProps, mapActionToProps)(Root);
