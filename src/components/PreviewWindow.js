import React from 'react';
import marked from 'marked';

export default class PreviewWindow extends React.Component {
  state = {
    textToMarkup: this.props.textToMarkup
  }

  handleMarkup = (textToMarkup) => {
    // sanitize is used to minimize risk of security vulnerability from unrestricted user input
    return { __html: marked(textToMarkup, { sanitize: true }) };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.textToMarkup !== nextProps.textToMarkup) {
      this.setState(() => ({ textToMarkup: nextProps.textToMarkup }));
    }
  }

  render() {
    return (
      <div className='output-window'>
        <div id='preview'>
          <div dangerouslySetInnerHTML={{__html: marked(this.state.textToMarkup, {sanitize: true})}}></div>
          {/*this.handleMarkup(this.state.textToMarkup)}></div>*/}
        </div>
      </div>
    );
  }
}