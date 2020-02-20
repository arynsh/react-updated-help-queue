import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props) {
  return (
    <div>
      {/* For LOCALLY scoped just omit the global keyword. */}
      <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p> {props.vote}</p>
      <h4>{props.formattedWaitTime}</h4>
      <hr />
      <button onClick={displayVote()}>RateUp</button>
      <hr/>
      {/* <button onClick={props.onVote}>RateDown</button> */}
    </div>
  );
}
function displayVote()
{
  props.vote+=1;
}
// function displayTimeOpen(timeOpen)
// {
//   return timeOpen.from(new Moment(),true);
// }

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  vote:PropTypes.number
  
};




export default Ticket;