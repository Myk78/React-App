import { map } from "jquery";
import { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Hello customer",
    customerCount: 5,
    customer: [
      {
        id: 1,
        name: "Muhammad yaseen",
        phone: "+9231737987",
        address: { city: "Samaro" },
      },
      {
        id: 1,
        name: "Barkat ali",
        phone: "+9234657876",
        address: { city: "Samaro" },
      },
      {
        id: 2,
        name: "Muhammad shahzieb",
        phone: "+9231123245",
        address: { city: "Samaro" },
      },
      {
        id: 3,
        name: "Arslan",
        phone: "",
        address: { city: "wah" },
      },
      {
        id: 4,
        name: "myk",
        phone: "+923173678",
        address: { city: "Samaro" },
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="sp badge badge-secondary m-2">
            {this.state.customerCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#Id</th>
              <th>CustomerName</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {/* Now you can see the value in array so we two option tr five times and second is use javascript map method it's iterate the array and pick one value in one iteration */}
            {this.state.customer.map((cust) => {
              return (
                <tr>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  {/* if you show conditionaly rendering inspect of null space  */}
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      // if you want to customize the conditionaly rendering so include div tag and custome class
                      <div className="bg-warning p-1">No_phone</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  // Executes when the user clicks on refresh button
  onRefreshClick = () => {
    this.setState({ customerCount: 7 });
  };
}
