import React from 'react';
import '../App.css';

export function Question(props, e) {

  function editAnswer(e) {
    props.edit(props.number, props.answers, e.target.value)
  }

  function format() {
    return props.mistake ? 'error' : 'correct'
  }

  return <div className='window'>
    <div className='question'>Вопрос {props.number + 1}</div>
    <div className='textQuestion'>{props.children}
      {props.visible ? (
          <div className='titleAnswer'>Ваш ответ:
            <span className={format()}>{props.answers[props.number]}</span>
            <div>{props.mistake ?
              (<p>
                <span className={format()}>Не правильно.</span><br/>
                Правильный ответ:
                <span className='correct'>{props.correctAnswer}</span>
              </p>) : <span className={format()}> Правильно</span>}</div>
          </div>) :
        <input value={props.answers[props.number]}
               onChange={(e) => editAnswer(e)}/>}</div>

  </div>
}
