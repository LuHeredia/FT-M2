import React from "react";

export default class Animals extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.animals.map((animals, index) => (
          <div key={index}>
            <h5>{animals.name}</h5>{" "}
            <img src={animals.image} alt={animals.name} width={"300px"} />
            <br />
            <span>{animals.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}
