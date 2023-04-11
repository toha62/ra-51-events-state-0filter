import React from 'react';
import Toolbar from './Toolbar';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.selected = this.filters[0];
    this.projects = [];
  }

  render() {
    return (
      <div className="container">
        <Toolbar
          filters={this.filters}
          selected={this.selected}
          onSelectFilter={(filter) => {console.log(filter);}}
        />
      </div>
    );
  }
}