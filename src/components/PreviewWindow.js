import React from 'react';
import marked from 'marked';

export default class PreviewWindow extends React.Component {
<<<<<<< HEAD
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
=======
    state = {
        textToMarkup: this.props.textToMarkup
    }

    handleMarkup = (textToMarkup) => {
        // sanitize is used to minimize risk of security vulnerability
        // from free user input
        return { __html: marked(textToMarkup, {sanitize: true}) };
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.textToMarkup !== nextProps.textToMarkup) {
            this.setState(() => ({ textToMarkup: nextProps.textToMarkup }));
        }
    }
    
    render() {
        return (
            <div className='output-window'>
                <div dangerouslySetInnerHTML={(this.handleMarkup(this.state.textToMarkup))} />
            </div>
        );
    }
>>>>>>> 38c3d0224f2401377568e167b3dc29fb18e80d7d
}