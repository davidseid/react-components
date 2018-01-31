

// creates a GroceryListItem component class that extends from the React Component
class GroceryListItem extends React.Component {
  // construct each GroceryListItem with properties passed in upon instantiation and set up states
  constructor(props) {
    // use these properties instantiate from the super class
    super(props);

    // set an initial state on whether it is 'done' or 'hovered' to false
    this.state = {
      done: false,
      hovered: false
    };
  }

  // create an on listItemClick function
  onListItemClick() {
    // reset the state's done property upon invocation to the opposite of what it currently is
    this.setState({
      done: !this.state.done
    });
  }

  // create an onlistItemHover function
  onListItemHover() {
    // reset the state's hovered property upon invocation to the opposite of what it currently is
    this.setState({
      hovered: !this.state.hovered
    });
  }

  // build a render function that manages the styling and actually returns the <li> with proper listeners and prop expectations
  render() {
    // set a style variable, and associate the stylings with conditions of state
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    // return a <li> with the style set to the style variable,
    // and create an onMouseEnter and onMouseLeave listener that invokes the hover function and binds this
    // create an onClick listener that invokes onListItemClick with the correct this binding
    // populate the list item with an instance's property's item 
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

// create a GroceryList that takes properties
var GroceryList = (props) => (
  // it sets up a JSX syntax that goes through the items passed in, returns a GroceryListItem with that item passed in
  <ul>
    <h2>My Grocery List</h2>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

var items = ['kiwis', 'strawberrys', 'blueberries', 'mangoes'];

ReactDOM.render(<GroceryList items={items}/>, document.getElementById("app"));