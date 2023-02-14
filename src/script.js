
class MarkdownPreviewer extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      userText: `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.org), and
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


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://w7.pngwing.com/pngs/423/781/png-transparent-nyan-cat-donuts-pusheen-pixel-art-cat-animals-magenta-nyan.png)
`
    };
    this.inputText = this.inputText.bind(this);
  }
  
   inputText = (e) => {
    this.setState({
      userText: e.target.value
    });
   };

   convertToHTML() {
     marked.setOptions({
      breaks: true
    })
      return {
       __html: marked(this.state.userText)
      };
    };

  
  
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        
        <div className="editArea">
          <p>Editor</p>
          <textarea id="editor" onChange={this.inputText} value={this.state.userText}></textarea>
        </div>
        
        <div className="previewer">
          <p>Preview</p>
          <div id="preview" dangerouslySetInnerHTML={this.convertToHTML()} />
        </div>
        
      </div>
    )
  }
  
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'));