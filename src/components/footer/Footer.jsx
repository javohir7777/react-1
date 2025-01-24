import { Component } from "react";
import lamboImg from "../../assets/lambo.jpeg";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <img src={lamboImg} alt="lambo?" />
        <p>Footer5</p>
        <img src="images.jpeg" alt="" />
        <img src="lambo.jpeg" alt="" />
      </div>
    );
  }
}
