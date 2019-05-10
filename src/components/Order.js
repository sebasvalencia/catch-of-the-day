import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {

    renderOrder = key => {
        const fish = this.props.fishes[key]; //object fish
        const count = this.props.order[key]; //many fish buy
        const isAvailable = fish && fish.status === "available";

        //make sure the fish is loaded before we continue
        if (!fish) return null; //render nothing

        if(!isAvailable){
            return (<li key={key}>
               Sorry {fish ? fish.name : "fish"} is no longer available
                    </li>) 
        }
       return (<li key={key}>
            {count} lbs {fish.name}
            {count * fish.price}
                </li>) 
    }
    
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce( (prevTotal, key) =>{
            //prevTotal => count, key => fish1...
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            //if exist fish and his status is available
            const isAvailable = fish && fish.status === "available";

            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            return prevTotal;//else
        }, 0);

        return (
            <div className='order-wrap'>
                <h2>Order</h2>
                <ul className="order">{orderIds.map(this.renderOrder)}</ul>
                <div className="total">
                Total:
                <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;