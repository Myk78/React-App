import { Component } from "react";

export default class MainContent extends Component {
  state = { pageTitle: "Hello customer", customerCount: 5 };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary">{this.customerCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }
  onRefreshClick() {
    console.log("Refresh");
  }
}
