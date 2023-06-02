import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistic extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total } = this.props;
    return (
      <>
        <p>Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p> Positive feedback: {this.props.positivePercentage} %</p>
      </>
    );
  }
}
