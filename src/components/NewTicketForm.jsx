import React from 'react';
import { v4 } from 'uuid';
// import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;
  

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
       type: 'ADD_TICKET',
       id: v4(),
       names: _names.value,
       location: _location.value,
       issue: _issue.value,
       timeOpen: new Date().getTime()
    }
    dispatch(action)
    // props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4(),timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

// NewTicketForm.propTypes = {
//   onNewTicketCreation: PropTypes.func
// };

// NewTicketForm = connect()(NewTicketForm);
export default connect()(NewTicketForm);