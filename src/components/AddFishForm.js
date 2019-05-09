import React from "react";
import { create } from "domain";

class AddFishForm extends React.Component {
  //Ref for the form elements
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    //1. Stop the form from submitting
    event.preventDefault();
    console.log("Making a Fish +Fish");
    //2. Get values from the form
    console.log(this.nameRef.current.value);

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    console.log(fish);
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
        />

        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>

        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="desc"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
        />

        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
