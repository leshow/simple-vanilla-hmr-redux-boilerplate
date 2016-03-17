import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';

const Counter = (props) => (
  <div className="counter-container">
    <div className="counter-num-label">{props.counter}</div>
    <div className="counter-even-label">{props.counter % 2 === 0 ? 'even' : 'odd'}</div>
    <br />
    <div className="counter-buttons">
      <button onClick={() => { props.actions.decrement(); }}>-</button>
      <button onClick={() => { props.actions.increment(); }}>+</button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
