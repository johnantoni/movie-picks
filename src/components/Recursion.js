import React, { Component } from 'react';
import _ from 'lodash';

class Recursion extends Component {
  state = {
    people: [ { state: 'CA', name: 'Mitchell', hobby: 'skiing' },
    { state: 'CO', name: 'Samantha', hobby: 'skydiving' },
    { state: 'MA', name: 'Wilbur', hobby: 'kayaking' },
    { state: 'NY', name: 'Theo', hobby: 'reading' },
    { state: 'CA', name: 'Yvette', hobby: 'welding' },
    { state: 'MT', name: 'Ronny' } ]
  }

  async componentDidMount() {
    this.countTo(5)
    this.setState({
      grouped: _.groupBy(people, 'state')
    });
  }

  countTo = (num = 10) => {
    var countdown = function(value) {
      if (value > 0) {
          console.log(value);
          return countdown(value - 1);
      } else {
          return value;
      }
    };
    countdown(num);
  }

  render() {
    let { people, grouped } = this.state // destructuring

    console.log(people)
    console.log(grouped)

    return (
      <div>
        <h1>Recursion</h1>

        <ul>
          { people.map((item, key) => {
            return(
              <li key={key}>{item.name}, {item.state}</li>
            )
          })}
        </ul>
      </div>      
    )
  }
}

export default Recursion;
