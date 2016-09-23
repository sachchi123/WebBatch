var React= require('react');
var e="";


var ChildComponent=React.createClass({



  change:function(event){
   e=event.target.value;
  },
  handle:function(){
    {this.props.data(e)}
  },

  render: function(){
    return (
      <div>
      Movie Name:<input type="text"  onChange={this.change} /> &nbsp;
        <button type="button" className="btn btn-sm btn-primary" onClick={this.handle} >Search</button>
        </div>

    );
  }

});
module.exports=ChildComponent;
