import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = buttonId => {
    if (buttonId === 'good') {
      return this.setState(prevState => {
        return { ...prevState, good: prevState.good + 1 };
      });
    }

    if (buttonId === 'neutral') {
      return this.setState(prevState => {
        return { ...prevState, neutral: prevState.neutral + 1 };
      });
    }

    if (buttonId === 'bad') {
      return this.setState(prevState => {
        return { ...prevState, bad: prevState.bad + 1 };
      });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeed = good + neutral + bad;
    //console.log('totalFeed',totalFeed);
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={good}
            neutral={neutral}
            bad={bad}
            onFeedbackButton={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeed === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
