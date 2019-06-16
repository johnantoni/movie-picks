import React, { Component } from 'react';
import axios from 'axios';
import Articles from './Articles'

class Home extends Component {
  state = {
    error: null,
    results: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://api.nytimes.com/svc/movies/v2/reviews/picks.json', {
        params: {
          "api-key": "h5UZXCVB1zo9baXl5iaXzlDGblWl1SsM"
        }
      });
      let results = response.data.results || []
      console.log(results)
      this.setState({results: results})     
    } catch (error) {
      this.setState({ error: error})
    }
  }

  render() {
    let { results, error } = this.state

    return (
      <div>
        <h1>Home</h1>

        <Articles list={results}/>

        { error &&
          <p>Sorry, an error has occured. { this.state.error }</p>
        }
      </div>      
    )
  }
}

export default Home;
