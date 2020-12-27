import PropTypes from 'prop-types';

export default function Section({title,  children, className, titleClassName }) { 

    console.log('typeof children: ', typeof children);
    // console.log('children', children);

    console.log(titleClassName); 

    return (
        <section className={className}>
            <h2 className={titleClassName}>{title}</h2>
            {children && children} {/* Почему в консоли ошибка "Несоответствует типу" ??? Сначала приходит Boolean после Object.*/}
            {/* render и commit фазы ?? */}
        </section>
    )
}

// Я не понял зачем эта секция, если у меня есть Feedback

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object,

    // children: PropTypes.oneOfType([
    //     PropTypes.object,
    //     PropTypes.bool,
    // ])
}