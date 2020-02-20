import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

class TicketList extends React.Component{
  constructor(props) {
    super(props);
    this.state = 
        {
          count: 0
        };
    this.handlerVote = this.handlerVote.bind(this);
  }


  handlerVote()
  {
    //   if (currentState != false){
        this.setState({count:this.state.count+1});
    //   }
    // this.setState({count:this.state.count+1});
  }

  render() {
    let currentState = <Ticket onVote = {this.handlerVote}/>;
    console.log(this.state.count);
    return (
      <div>
        <hr/>
        {
          this.props.ticketList.map((ticket) =>
            <Ticket names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              vote={ticket.vote}
              formattedWaitTime={ticket.formattedWaitTime}
              key={ticket.id}
            />
          )
        }
      </div>
    );
  }
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};


export default TicketList;