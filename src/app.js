import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreviewer from './components/MarkdownPreviewer';

import 'normalize.css/normalize.css'; // reset all browser conventions
import './styles/styles.scss';

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('app'));