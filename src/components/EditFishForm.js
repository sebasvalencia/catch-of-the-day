import React from "react";


class EditFishForm extends React.Component {

    /*** Update a Fish data ***/
    handleChange = (event) => {
        console.log(event.currentTarget.value);//get fire on
        //1. Take a copy of the current fish,
        const updatedFish = {
            ...this.props.fish,
            //value is updated and dynamic, copy and override what is change
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);

        //2. send to the state the fish change
        this.props.updateFish(this.props.index, updatedFish);

    }

    render() {
        return (
            // <p>Edit Fish</p>
            <div className="fish-edit">
                <input
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.name}
                />
                <input
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.price}
                />
                <select
                name="status"
                onChange={this.handleChange}
                value={this.props.fish.status}
                >
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold out!</option>
                </select>
                <textarea
                name="desc"
                onChange={this.handleChange}
                value={this.props.fish.desc}
                />
                <input
                name="image"
                type="text"
                onChange={this.handleChange}
                value={this.props.fish.image}
                />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }

}

export default EditFishForm;

