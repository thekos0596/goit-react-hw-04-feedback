import { useState } from 'react';
import { Section } from '../Section/Section';
import { FedbackOptions } from '../FedbackOptions/FedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const totalVotes = good + neutral + bad;

  const PositiveFeedbackPercentage = Math.round((good / totalVotes) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
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
            positivePercentage={PositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};
