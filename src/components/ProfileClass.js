import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Best place to create a state
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    console.log("ComponentDIDMount");
  }
  render() {
    return (
      <div>
        <h1>Profile class Component</h1>
        <h2>{this.props.name}</h2>
        <h3>Count:{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          buttonClass
        </button>
      </div>
    );
  }
}

export default Profile;
