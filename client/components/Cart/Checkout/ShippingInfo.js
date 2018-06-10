import React from "react";

class ShippingInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      address: '',
      city: "",
      state: "",
      zipCode: ""
    };
    this.setLocalState = this.setLocalState.bind(this);
  }

  setLocalState(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

    const address = [];
    for (var key in this.state) {
      const value = this.state[key];
      address.push(value);
    }
    const combinedAddress = address.join(", ");
    this.props.handleAddress('shippingAddress', combinedAddress)
  }

  render() {
    return (
      <div className="container">
        <div>
          <div>
            Name:<br />
            <input
              type="text"
              className="form-control"
              name="shippingName"
              onChange={this.props.handleChange}
            />
          </div>
          <div>
            Email:<br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.props.handleChange}
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
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="City"
              name="city"
              className="form-control"
              onChange={this.setLocalState}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              className="form-control"
              onChange={this.setLocalState}
            />
            <input
              type="text"
              placeholder="Zip code"
              className="form-control"
              onChange={this.setLocalState}
              name="zipCode"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ShippingInfo;

