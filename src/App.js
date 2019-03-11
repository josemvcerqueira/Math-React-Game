import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
    const question = this.makeQuestionObj();
    this.newQuestion = this.newQuestion.bind(this)
    this.state = {
    value1: question.value1,
    value2: question.value2,
    value3: question.value3,
    corrAnswer: question.rightAnswer,
    propAnswer: question.proposedAnswer,
	numQuestions: 0,
  	numCorrect: 0
		};
  	}
  
  makeQuestionObj = () => {
  const value1 = Math.floor(Math.random() * 100),
        value2 = Math.floor(Math.random() * 100),
        value3 = Math.floor(Math.random() * 100),
        rightAnswer= value1 + value2 + value3,
        proposedAnswer = Math.floor(Math.random() * 3) + rightAnswer;
    	return {
        value1,
        value2,
        value3,
        rightAnswer,
        proposedAnswer,
        }
  }

checkAnswerTrue = ()=>{
if(this.state.corrAnswer === this.state.propAnswer) {
this.setState(currentState =>{
return {
numCorrect: currentState.numCorrect + 1
}
})
}
this.setState(currentState =>{
return {
numQuestions: currentState.numQuestions + 1
}
})
this.newQuestion();
}

checkAnswerFalse = ()=>{
if(this.state.corrAnswer !== this.state.propAnswer) {
this.setState(currentState =>{
return {
numCorrect: currentState.numCorrect + 1
}
})
}
this.setState(currentState =>{
return {
numQuestions: currentState.numQuestions + 1
}
})
this.newQuestion();
}

newQuestion = () =>{
const { value1, value2, value3, rightAnswer, proposedAnswer } = this.makeQuestionObj()
this.setState(currentState=>{
return {
value1,
value2,
value3,
corrAnswer: rightAnswer,
propAnswer: proposedAnswer
}
})
}

  render() {
    const {state, checkAnswerTrue, checkAnswerFalse} = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${state.value1} + ${state.value2} + ${state.value3} = ${state.propAnswer}`}</p>
          </div>
          <button onClick={checkAnswerTrue}>True</button>
          <button onClick={checkAnswerFalse}>False</button>
          <p className="text">
            Your Score: {state.numCorrect}/{state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
