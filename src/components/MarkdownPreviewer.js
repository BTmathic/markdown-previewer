import React from 'react';
import PreviewWindow from './PreviewWindow';

export default class MarkdownPreviewer extends React.Component {
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