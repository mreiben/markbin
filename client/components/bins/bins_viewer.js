import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render(){
    const rawHTML = markdown.toHTML(this.props.bin.content);

    return (
      <div className="col-xs-6">
        <h2 className="output-title">{this.props.bin.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    );
  };
};

export default BinsViewer;
