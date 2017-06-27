import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component {

  onBinRemove(bin){
    Meteor.call('bins.remove', bin);
  }

  renderList() {
    return this.props.bins.map(bin =>{
      const url = `/bins/${bin._id}`;
      const binTitle = bin.title? bin.title : 'Untitled';

      return (
        <li className="list-group-item" key={bin._id}>
          <Link to={url}>Bin: {binTitle}</Link>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBinRemove(bin)}>
              Remove
            </button>
          </span>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
        <p className="instructions">Click 'Create Bin' above to get started, or open and edit an existing bin!</p>
      </div>
    );
  };
};

export default createContainer(()=> {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch() };
}, BinsList);
