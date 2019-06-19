import React, { Component } from 'react';

class About extends Component {

  async componentDidMount() {

  }

  onKeyPressed = (e) => {
    console.log('KeyCode: ', e.keyCode)
    if(e.keyCode === 13) { // The Enter/Return key
      console.log("enter pressed")
    }
  }

  render() {
    var Parent = function(a) {
      // Setting type instance level properties
      this.a = a;
      
      console.log('Parent type constructor called');
    };
    
    Parent.prototype.funA  = function() {
      console.log('Parent.funA called');
    };

    var Child = function(a, b) {
      // Calling parent type constructor function
      Parent.call(this, a);
  
      // Setting type instance level properties
      this.b = b;
      
      console.log('Child type constructor called');
    };

    // This will give Child access to Prent functions
    // Object.create() function requires ECMAScript5 compatible browser, 
    // if this is not supported just a new instance of Prent type could be used instead
    Child.prototype = Object.create(Parent.prototype); 

    // Defining funB that will be only available for Child type instances
    Child.prototype.funB = function() {
      console.log('Child.funB called');
    };

    return (
      <div>
        <h1>About Movie Picks</h1>

        <input onKeyDown={this.onKeyPressed} size="40" placeholder="Click here and press Enter"></input>

        <div data-message="This is from the first button" tabIndex="0">Click me!</div>
        <div data-message="This is from the second button" tabIndex="1">Click me too!</div>
        <div data-message="This is from the third button" tabIndex="2">And me!</div>
      </div>      
    )
  }
}

export default About;
