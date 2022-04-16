import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actionCreators/questionActionCreator';
import { State } from '../redux/reducers/index';
import Left from '../component/Left/Left';
import Middle from '../component/Middle/Middle';
import Right from '../component/Right/Right';
import { Question } from '../models/index';

const Home = (): JSX.Element => {
  // Redux setting hooks
  const dispatch = useDispatch();
  const { editQuestion, removeQuestion } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // get the state
  const questionState = useSelector((state: State) => state.question);
  // define states
  const [questions, setQuestions] = useState<Question[]>(questionState);

  useEffect(() => {
    setQuestions(questionState);
  }, [questions, questionState]);

  return (
    <div className="mainContainer">
      <div className="bodyContainer">
        <Left />
        <div className="content" data-testid="content-element">
          <Middle
            questions={questions}
            editQuestion={editQuestion}
            removeQuestion={removeQuestion}
          />
          <Right />
        </div>
      </div>
    </div>
  );
};
export default Home;
