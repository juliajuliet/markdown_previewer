function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "inputText",

















































    e => {
      this.setState({
        userText: e.target.value });

    });this.state = { userText: `# Welcome to my React Markdown Previewer!

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
` };this.inputText = this.inputText.bind(this);}convertToHTML() {marked.setOptions({ breaks: true });return { __html: marked(this.state.userText) };}render() {return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/React.createElement("div", { className: "editArea" }, /*#__PURE__*/React.createElement("p", null, "Editor"), /*#__PURE__*/React.createElement("textarea", { id: "editor", onChange: this.inputText, value: this.state.userText })), /*#__PURE__*/React.createElement("div", { className: "previewer" }, /*#__PURE__*/React.createElement("p", null, "Preview"), /*#__PURE__*/React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.convertToHTML() })));}}ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById('root'));