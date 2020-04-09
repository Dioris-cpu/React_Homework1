import React from "react";
import axios from "axios";

export default class EmployeesInput extends React.Component {
  state = {
    name: '',
  };

  // this is the value of anything that you type into the textbox
  // and it gets added to the state perameter
  handleChange = event =>{
      this.setState({name: event.target.value});
  }
  // stops the browser from reloading a new page 
  handleSubmit = event =>{
      event.preventDefault();
    // created a new object
      const user = {
          name: this.state.name
      };
      axios.post(`https://jsonplaceholder.typicode.com/users` , {user})
      .then(res =>{
          console.log(res)
          console.log(res.data)
      })

    }
    render() {
        return (
         <form onSubmit={this.handleSubmit}>
             <label>
                 <input type="text" name="name" onChange={this.handleChange}/>
             </label>
             <button type="submit">Add</button>
         </form>
        );
      }
    }
  
 
