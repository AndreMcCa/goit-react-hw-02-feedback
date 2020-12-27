import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

import Section from '../Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

import s from './Feedback.module.css';

class Feedback extends Component {

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.props.state;
        return good +  neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.props.state; 
        const total = this.countTotalFeedback();

        return Number((good / (total / 100)).toFixed(1));   
    }

    render() {
        const { good, neutral, bad, isEstimate } = this.props.state;
        
        return(
            <div className={s.Feedback}>
                <Section className={s.SectionFeedback} titleClassName={s.FeedbackTitle} title={`${!isEstimate ? 'Пожалуйста, оставьте Ваш отзыв' : 'Спасибо, это делает нас лучше'}`}>
                    {!isEstimate && <FeedbackOptions options={['bad','neutral', 'good']} onLeaveFeedback={this.props.onLeaveFeedback}/>}
                </Section>

                <Section title={'Статистика'} titleClassName={s.StatisticsTitle}>
                    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
                </Section>

                {/* {!isEstimate && <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.props.onLeaveFeedback}/>} */}
                {/* <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> */}
            </div>
        )
    }
}


Feedback.propTypes = {
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        isEstimate: PropTypes.bool.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default Feedback;

