import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import Youtube from './components/Youtube';
import Footer from "./footer";

// https://youtu.be/VoykkM6Baoc

class App extends Component {

  state = {
    questionBank: [], // this is where our questions will be stored
    score: 0,
    responses: 0,
    output: ""
  };

  getQuestions = () =>
  {

    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer)
    {
      this.setState({
        score: this.state.score + 1,
        output: "Correct! CBT Nuggets is now ready to hire Alyssa Kelley."
      });
    }
    else 
    {
      this.setState({
        output: "Please try again. Hint: There may be more than one correct answer."
      });
    }
    this.setState({
      responses: this.state.responses < 1 ? this.state.responses + 1 : 1
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return(
      <div className = 'App'>
      <div className = "YoutubeVideoPlayer">
          <Youtube videoId='VoykkM6Baoc'/>
      </div>

        <div className="container">
          <div className="title">Quiz</div>
          {this.state.questionBank.length > 0 && 
            this.state.responses < 1 &&
            this.state.questionBank.map(
              ({question, answers, correct, 
                questionId}) => (
                  <QuestionBox 
                  question={question} 
                  options={answers} 
                  key={questionId}
                  selected={answer => this.computeAnswer(answer, correct)}
                  />
                )
          )}
          
          {this.state.responses === 1 ? (<Result output={this.state.output} score={this.state.score} playAgain={this.playAgain}/>) : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;


