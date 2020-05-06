import React from 'react';
import ShowList from '../components/ShowList'
import ShowForm from '../components/ShowForm'
import Schedule from '../Models/schedule';
import ScheduleList from '../components/ScheduleList';
import './Showcontainer.css';
import image from './TVwizard2.png';


class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      shows: [],
      filteredShows: [],
      day: "",
      time: "",
      genre: "",
      selectedShowName: ''
    }
    this.handleShowSelected = this.handleShowSelected.bind(this);
    this.onShowAdded = this.onShowAdded.bind(this);
    this.onScheduleDelete = this.onScheduleDelete.bind(this);
    this.onTimeSelected = this.onTimeSelected.bind(this);
    this.onDaySelected = this.onDaySelected.bind(this);
    this.onGenreSelected = this.onGenreSelected.bind(this);
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

  onTimeSelected(time) {
     this.setState({time: time});
  }
  onDaySelected(day) {
     this.setState({day: day});
  }
  onGenreSelected(genre) {
     this.setState({genre: genre});
  }

  onShowAdded(showData) {
    const ids = this.state.schedule.map(show => {
      return show.id
    });
    if (!ids.includes(showData.id)) {
      Schedule.post(showData)
        .then(addedShow => this.setState({
          schedule: [...this.state.schedule, addedShow]
        }))
    };
  }

 render() {
   if (!this.state.shows.length) return null;
   const filteredShowsbyDay= this.state.shows.filter(show => show.schedule.days.includes(this.state.day))
   const filteredShowsbyTimeDay = this.state.shows.filter(show =>
   show.schedule.time === this.state.time && show.schedule.days.includes(this.state.day))
   const filteredShowsbyGenre = this.state.shows.filter(show =>
   show.genres.includes(this.state.genre))

   return (

     <section id="grid">
          <div className="logo">
          <header><img className="logo-wizard" src={image} alt="image"></img></header>
          </div>
          <div className="show-form">
            <ShowForm
            shows={this.state.shows}
            onTimeSelected={this.onTimeSelected}
            onDaySelected={this.onDaySelected}
            filteredShows={filteredShowsbyDay}
            onGenreSelected={this.onGenreSelected}
            />
          </div>
          <div className="show-list">
            <ShowList
            shows={this.state.shows}
            onShowAdded={this.onShowAdded}
            filteredShows={filteredShowsbyTimeDay}
            filteredShowsbyGenre={filteredShowsbyGenre}
            />
          </div>
          <div className="schedule-list">
          <h1>ScheduleList</h1>
            <ScheduleList
            schedule={this.state.schedule}
            onScheduleDelete={this.onScheduleDelete}
            />

          </div>
            <div className="footer">
            </div>



    </section>
   );
 }
}
 export default ShowContainer;
