import React, { Component } from 'react';

import Feedback from './components/Feedback/Feedback';

import './App.css';
class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        isEstimate: false,
    }

    onLeaveFeedback = (e) => {
        const appraisal = e.currentTarget.getAttribute('data-appraisal');

        this.setState(prevState => ({[appraisal]: prevState[appraisal] + 1}));
        this.setState({isEstimate: true})
    }

    render() {
       return <Feedback state={this.state} onLeaveFeedback={this.onLeaveFeedback}  />
    }
}

export default App;