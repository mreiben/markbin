import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  onEditorChange(content){
    Meteor.call('bins.update', this.props.bin, content);
  }

  onTitleChange(){
    const newTitle = this.refs.title.value;
    Meteor.call('bins.title', this.props.bin, newTitle);
  }

  render() {
    return (
      <div className="col-xs-6">
        <h5>Bin Title</h5>
        <input
          value={this.props.bin.title}
          ref="title"
          onChange={this.onTitleChange.bind(this)}
          className="form-control">
        </input>
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  };
};

export default BinsEditor;
