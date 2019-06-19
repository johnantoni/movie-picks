import React, { Component } from 'react';

class About extends Component {

  async componentDidMount() {

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
      </div>      
    )
  }
}

export default About;
