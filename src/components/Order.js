import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

class Order extends React.Component {
  static proTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };

  renderOrder = key => {
    const fish = this.props.fishes[key]; //object fish
    const count = this.props.order[key]; //many fish buy
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key: key,
      timeout: { enter: 500, exit: 500 }
    };

    //make sure the fish is loaded before we continue
    if (!fish) return null; //render nothing

    //if there is not available
    if (!isAvailable) {
      return (
        <CSSTransition
          {...transitionOptions}
          // classNames="order"
          // key={key}
          // timeout={{ enter: 250, exit: 250 }}
        >
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }

    //if is available
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 250, exit: 250 }}
      >
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 250, exit: 250 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      //prevTotal => count, key => fish1...
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      //if exist fish and his status is available
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal; //else
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        {/* 
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul> 
                */}
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
