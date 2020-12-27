import PropTypes from 'prop-types';

import Notification from './Notification/Notification';

import s from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage}) {
    
    if(total === 0) {
        return <Notification message={'Отзывов нет'} />
    }

    return (
    <ul className={s.list}>
        <li className={s.item} key='ilem-good'>Хорошо: {good}</li>
        <li className={s.item} key='ilem-neutral'>Сойдёт: {neutral}</li>
        <li className={s.item} key='ilem-bad'>Можно лучше: {bad}</li>  
        <li className={s.item} key='ilem-total'>Всего: {total}</li>

        {total > 0 && <li key='ilem-positivePercentage'>Положительных отзывов: {positivePercentage}%</li>}          
    </ul>
    )    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
