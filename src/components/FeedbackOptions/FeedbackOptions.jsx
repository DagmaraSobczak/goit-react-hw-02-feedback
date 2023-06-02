import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  handleIncrement = option => {
    this.props.onLeaveFeedback(option);
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleIncrement('good')}>good</button>
        <button onClick={() => this.handleIncrement('neutral')}>neutral</button>
        <button onClick={() => this.handleIncrement('bad')}>bad</button>
      </>
    );
  }
}
