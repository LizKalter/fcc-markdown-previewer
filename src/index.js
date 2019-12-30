import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import marked from 'marked';
import './index.css';

marked.setOptions({
	breaks: true
});

/* Placeholder text from the freeCodeCamp example for this project. */
const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

function Editor(props) {
	return (
		<textarea id="editor" onChange={props.updateInput} defaultValue={placeholder}></textarea>
	);
}

function Preview(props) {
	return (
		<div id="preview" dangerouslySetInnerHTML={{__html: props.output}}></div>
	);
}

function MarkdownPreviewer(props) {
	const [output, setOutput] = useState(marked(placeholder));

	const updateInput = (event) => {
		setOutput(marked(event.target.value));
	}

	return (
		<div className="markdown-previewer">
			<Editor updateInput={updateInput} />
			<Preview output={output} />
		</div>
	);
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'));

serviceWorker.unregister();
