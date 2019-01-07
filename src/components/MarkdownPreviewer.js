import React from 'react';
import PreviewWindow from './PreviewWindow';

export default class MarkdownPreviewer extends React.Component {
<<<<<<< HEAD
  state = {
    textToMarkup: ''
  }

  handleChange = (e) => {
    let textToMarkup = e.target.value;
    this.setState(() => ({ textToMarkup }));
  }

  componentDidMount() {
    this.setState(() => ({
      textToMarkup: startingEditor
    }));
  }

  render() {
    return (
      <div>
        <h3>
          Enter markdown to display on the right
                </h3>
        <div className='main'>
          <textarea
            id='editor'
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

const startingEditor =
`Heading
=======
Subheading
--------
# Heading
## Sub-heading
### Deeper heading
#### Even deeper
##### A little bit more
###### Quite a ways down!

Paragraphs are separated
by a blank line.
       
Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, ~~strikethrough~~  , and ~~*__ALL OF THEM__*~~.

Shopping list:
       
* apples
* oranges
* pears

Numbered list:
       
1. apples
2. oranges
3. pears
- More complicated
  - Style indents
    - May be done
      - As well!
        - And if you don't break a numbered list it keeps going!

For tables we can do

Header 1 | Header 2
-------- | --------
Content  | More content
Even more | Wrapping things up

Here is some code, \`<div></div>\` between two backticks

\`\`\`
// Here is some multi-line code:

function example(input) {
  if (!!input) {
    return true;
  }
  return false;
}
\`\`\`

Inline links

* [BT](https://BTmathic.github.io)

Embed images similar to inline links:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
=======
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
>>>>>>> 38c3d0224f2401377568e167b3dc29fb18e80d7d
