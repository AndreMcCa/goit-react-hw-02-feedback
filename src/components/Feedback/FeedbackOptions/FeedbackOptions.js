import PropTypes from 'prop-types';
import { Happy, Sick, Surprised } from 'images/all-icons';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback}) {

    return options.map(option => {
        let Svg = null;
        
        if(option === 'good') {
            Svg = Happy;
        } 

        if(option === 'neutral') {
            Svg = Surprised;
        }

        if(option === 'bad') {
            Svg = Sick;
        }


        return (
            <button className={s[option]} type='button' key={`button-${option}`} data-appraisal={option} onClick={onLeaveFeedback}>
                <Svg width={50} height={50}/>
            </button>
        )
    })
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}