import React from 'react';
import ShowList from '../components/ShowList'
import ShowForm from '../components/ShowForm'
import Schedule from '../Models/schedule';
import ScheduleList from '../components/ScheduleList';


class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      shows: [],
      selectedShowName: ''
    }
    this.handleShowSelected = this.handleShowSelected.bind(this);
    this.onShowAdded = this.onShowAdded.bind(this);
  }

  componentDidMount() {
    const url = 'http://api.tvmaze.com/shows';

    fetch(url)
    .then(res => res.json())
    .then(shows => this.setState({ shows: shows }))
    .catch(err => console.error);

    Schedule.get()
    .then(schedule => this.setState({schedule}));
  }

  handleShowSelected(name) {
    this.setState({ selectedShowName: name })
  }

  onScheduleDelete(id) {
    Schedule.delete(id)
      .then(schedule => this.setState({ schedule }));
  }

  onShowSelected() {
     return null;
  }

  onShowAdded(showData) {
    Schedule.post(showData)
    .then(addedShow => this.setState({
      schedule: [...this.state.schedule, addedShow]
    }));
  }

 render() {
   if (!this.state.shows.length) return null;

   return (
     <div>
     <h2>Show Container</h2>
     <ShowForm
     shows={this.state.shows}
     onShowSelected={this.onShowSelected}
     />
     <ShowList
     shows={this.state.shows}
     onShowAdded={this.onShowAdded}
     />
     <ScheduleList
     schedule={this.state.schedule}
     onScheduleDelete={this.onScheduleDelete}
     />

     </div>
   );
 }
}
 export default ShowContainer;
