import React from 'react';

class ShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
      shows: [],
      selectedShow: ''
    }
  }

  componentDidMount() {
    const url = 'http://api.tvmaze.com/schedule/full';
  }
}
export default ShowContainer;
