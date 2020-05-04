import React from 'react';
import ShowList from '../components/ShowList'

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      shows: [],
      selectedShowName: ''
    }
    this.handleShowSelected = this.handleShowSelected.bind(this);
  }

  componentDidMount() {
    const url = 'http://api.tvmaze.com/shows';

    fetch(url)
    .then(shows => this.setState({ shows: shows }))
    .catch(err => console.err);
  }

  handleShowSelected(name) {
    this.setState({ selectedShowName: name})
  }

  onShowDelete() {
    return null;
  }

  render() {
    // const selectedShow = this.state.shows.find(show => show.name === this.state.selectedShowName)

    return (
      <div>
      <h2>Show Container</h2>
      <ShowList
      shows={this.state.shows}
      onShowDelete={this.onShowDelete}
      />
      </div>
    )
  }
}
export default ShowContainer;
