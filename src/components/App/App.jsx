import React, { Component } from 'react';
import { Section } from '../Section/Section';
import { FedbackOptions } from '../FedbackOptions/FedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const votes = Object.values(this.state);
    return votes.reduce((acc, vote) => acc + vote, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalVotes = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      totalVotes,
      good
    );

    return (
      <Container>
        <Section title="Please leave feedback">
          <FedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FedbackOptions>
        </Section>
        <Section title="Statistics">
          {!totalVotes ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}
