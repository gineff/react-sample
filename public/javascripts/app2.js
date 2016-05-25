/**
 * Created by Андрей on 24.05.2016.
 */

/*global React */


var PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

/*
 FilterableProductTable
  SearchBar (blue): receives all user input
  ProductTable
    ProductCategoryRow
    ProductRow

*/

var FilterableProductTable  = React.createClass({
  getInitialState: function () {
    return {products};
  },
  onSearch: function (options) {
    if(options.str) {
      var filtered = products.filter((product)=> {
        var search = new RegExp(options.str,'i');
        return search.test(product.name) && (options.stocked? product.stocked : true)
      });
      this.setState({products: filtered})
    }else{
      this.setState({products: products})
    }
  },
  render: function () {
    return (
      <div className="FilterableProductTable">
        <SearchBar onSearch={this.onSearch}/>
        <ProductTable products = {this.state.products}/>
      </div>
    )
  }
});

var SearchBar = React.createClass({
  onSubmit: function (e) {
    e.preventDefault()
  },
  searchChange: function (e) {
    //if(e.keyCode !== 13) return;
    var val = this.refs.input.value.trim();
    this.props.onSearch({str: val, stocked: this.refs.categoryCheckbox.checked})
    
  },
  render: function () {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          ref = "input"
          type="text"
          onKeyUp={this.searchChange}
        />
        <input
          onChange={this.searchChange}
          ref = "categoryCheckbox"
          type="checkbox"
        />
      </form>
    );
  }
});


var ProductTable = React.createClass({
  render: function () {

    var products =  (this.props.products.map(product => <ProductRow key={product.name} product={product}/>));


    return (
      <table>
        <tbody>
        {products}
        </tbody>
      </table>
    )
  }
});

var ProductCategoryRow = React.createClass({
  render: function () {

  }
});

var ProductRow = React.createClass({
  render: function () {
    return (
      <tr><td>{this.props.product.name}</td><td>{this.props.product.price}</td></tr>
    )
  }
});

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('container2'));