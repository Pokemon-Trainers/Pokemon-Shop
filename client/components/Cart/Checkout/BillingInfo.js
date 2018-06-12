import React from "react";

class BillingInfo extends React.Component {
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
    if (props.billingAddress) {
      const [address, city, state, zipCode] = props.billingAddress.split(", ");
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
    for (var key in this.state) {
      const value = this.state[key];
      address.push(value);
    }
    const combinedAddress = address.join(", ");
    this.props.handleAddress("billingAddress", combinedAddress);
  }

  render() {
    return (
      <div className="container container-body  margin-bottom">
        <div>
          Name:<br />
          <input
            type="text"
            className="form-control"
            name="billingName"
            onChange={this.props.handleChange}
            value={this.props.billingName}
          />
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
          <div>
            Credit Card #:<br />
            <input type="text" maxLength="20" className="form-control" />
          </div>
          <div className="flex">
            <div>
              CVC<br />
              <input type="text" maxLength="3" className="form-control" />
            </div>
            <div>
              Expiration: <br />
              <div className="flex">
                <select id="cc-exp-month" className="form-control" >
                  <option value="01">Jan</option>
                  <option value="02">Feb</option>
                  <option value="03">Mar</option>
                  <option value="04">Apr</option>
                  <option value="05">May</option>
                  <option value="06">Jun</option>
                  <option value="07">Jul</option>
                  <option value="08">Aug</option>
                  <option value="09">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
                <select id="cc-exp-year" className="form-control" >
                  <option value="13">2013</option>
                  <option value="14">2014</option>
                  <option value="15">2015</option>
                  <option value="16">2016</option>
                  <option value="17">2017</option>
                  <option value="18">2018</option>
                  <option value="19">2019</option>
                  <option value="20">2020</option>
                  <option value="21">2021</option>
                  <option value="22">2022</option>
                </select>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default BillingInfo;

