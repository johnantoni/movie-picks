import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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

        { results.map((item, index) => {
          return (
            <article key={index}>
              <header>
                <h3>{item.display_title}</h3>
              </header>
              <section className="headline">{item.headline}</section>
              <section className="summary">{item.summary_short}</section>
              <footer>
                <Link to={item.link.url} target="_blank">{item.link.suggested_link_text}</Link> 
              </footer>
            </article>
          )
        })}

        { error &&
          <p>Sorry, an error has occured. { this.state.error }</p>
        }
      </div>      
    )
  }
}

export default Home;
