import React, { Component } from "react";

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };

  // this function takes in a set of props, filters them, passes them on to the component as updated state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    // return the object we want merged into the state
    return { photos };
  }

  // can use an arrow function here because we are using the inherited context to keep "this" from the Class component
  // this is an alternative to not using an arrow function and requiring a "function bind" in the class constructor
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
