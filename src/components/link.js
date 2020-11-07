const Link = (props) => <a
  className="App-link"
  onClick={props.onClick}
>
  {props.text}
</a>

export default Link;