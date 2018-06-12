import React from "react";

class ShippingInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      city: "",
      state: "",
      zipCode: ""
    };
    this.setLocalState = this.setLocalState.bind(this);
  }

  static getDerivedStateFromProps(props, localState) {
    if (props.shippingAddress) {
      const [address, city, state, zipCode] = props.shippingAddress.split(", ");
      return {
        address,
        city,
        state,
        zipCode
      };
    } else {
      return localState;
    }
  }

  async setLocalState(event) {
    await this.setState({
      [event.target.name]: event.target.value
    });
    const address = [];
    for (let key in this.state) {
      const value = this.state[key];
      address.push(value);
    }
    const combinedAddress = address.join(", ");
    this.props.handleAddress("shippingAddress", combinedAddress);
  }

  render() {
    return (
      <div className="container margin-bottom">
        <div>
          <div>
            Name:<br />
            <input
              type="text"
              className="form-control"
              name="shippingName"
              onChange={this.props.handleChange}
              value={this.props.shippingName}
            />
          </div>
          <div>
            Email:<br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.props.handleChange}
              value={this.props.email}
            />
          </div>
        </div>
        <div>
          <div>
            Address:<br />
            <input
              type="text"
              placeholder="Address"
              name="address"
              className="form-control"
              onChange={this.setLocalState}
              value={this.state.address}
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="City"
              name="city"
              className="form-control"
              onChange={this.setLocalState}
              value={this.state.city}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              className="form-control"
              onChange={this.setLocalState}
              value={this.state.state}
            />
            <input
              type="text"
              placeholder="Zip code"
              className="form-control"
              onChange={this.setLocalState}
              name="zipCode"
              value={this.state.zipCode}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ShippingInfo;
