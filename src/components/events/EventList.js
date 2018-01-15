import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moduleName, fetchAll, eventListSelector} from "../../ducks/events";


class EventList extends Component {

  componentDidMount = () => {
    this.props.fetchAll();
  };

  render() {
    console.log('----', this.props.events);
    return (
      <div>
        <table>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    );
  }
  getRows = () => {
    return this.props.events.map(this.getRow)
  };

  getRow = (event) => {
    return <tr key={event.uid}>
      <td>{event.title}</td>
      <td>{event.where}</td>
      <td>{event.month}</td>
    </tr>
  }
}

export default connect(state => ({
  events: eventListSelector(state)
}), {fetchAll})(EventList);
