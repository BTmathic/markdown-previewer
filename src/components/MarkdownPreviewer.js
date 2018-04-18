import React from 'react';
import PreviewWindow from './PreviewWindow';

export default class MarkdownPreviewer extends React.Component {
    state = {
        textToMarkup: 'Heading\n=======\n\nSub-heading\n-----------\n\n# Heading\n## Sub-heading\n### Another deeper heading\n#### Even deeper\n##### A little bit more\n###### Quite a ways down!\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~  , and ~~*__`ALL OF THEM`__*~~.\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[BT](https://codepen.io/brokentriathlete)*'
    }

    handleChange = (e) => {
        let textToMarkup = e.target.value;
        // handle markup conversion
        this.setState(() => ({ textToMarkup }));
    }

    render() {
        return (
            <div>
                <h3>
                    Enter HTML to display here
                </h3>
                <div className='main'>
                    <textarea 
                        className='input-window'
                        onChange={this.handleChange}
                        value={this.state.textToMarkup}
                    />
                    <PreviewWindow
                        textToMarkup={this.state.textToMarkup}
                    />
                </div>
            </div>
        );
    }
}