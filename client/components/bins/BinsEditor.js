import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  onEditorChange(content) {
    console.log(content);
  }
  render() {
    return (
       <div className="col-xs-8">
         <h5>Input</h5>
         <CodeMirror
           onChange={this.onEditorChange.bind(this)}
           options={{ mode: 'markdown', lineNumbers: true }} />
       </div>
    );
  }
}

export default BinsEditor;