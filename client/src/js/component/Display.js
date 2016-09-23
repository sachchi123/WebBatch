var React=require('react');
var ReactDOM=require('react-dom');
var Display=React.createClass({



  delete:function()
  {
    $.ajax({
      url: "http://localhost:8080/movie/unfav",
      dataType: 'json',
      type: 'DELETE',
      data: this.props.searchs,
      success: function() {
        console.log('success');
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },

  update:function()
  {
    var query    = ReactDOM.findDOMNode(this.refs.query).value;
    this.props.searchs.t=query;
    $.ajax({
      url:"http://localhost:8080/movie/update",
      dataType: 'json',
      type: 'PUT',
      data: this.props.searchs,
      success: function() {
        console.log(url);

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },



  render:function(){

    return(
      <div className="content">
      <br/><br/><br/>
      <h1>hello</h1>
      <div className="row" >
        <div className="col-sm-3">
      <div className="thumbnail">
      <img src={this.props.searchs.Poster} alt="image"/>

      </div>
      </div>
      <div className="col-sm-9">
      <div className="list-group">
      <div className="list-group-item">
      <h2 className="list-group-item-Heading">Movie Title :<b>{this.props.searchs.Title}</b></h2>
      <h3 className="list-group-item-text">Year:{this.props.searchs.Year}</h3>
      <h1 className="list-group-item-text">Id:{this.props.searchs.imdbID}</h1>
      <h1 className="list-group-item-text">Type:{this.props.searchs.Type}</h1>
      <button type="submit" className="btn  btn-danger" onClick={this.delete}>Delete</button>
      &nbsp; &nbsp;

      <a href="#myModal" role="button" className="btn btn-warning" data-toggle="modal">Update</a>
      <div className="modal fade" id="myModal">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
      <button className="close" data-dismiss="modal">&times;</button>
      <h4 className="modal-title">Update</h4>
      </div>
      <div className="modal-body">


      <form className="form-horizontal">
      <div className="form-group">
      <label className="col-lg-2 control-label" id="inputName">Title</label>
      <div className="col-lg-10">
      <input className="form-control" placeholder="Name" type="text" ref="query"/>
      </div>
      </div>
      <div className="form-group">
      <div className="col-lg-12">
      <button className="btn btn-success pull-right" type="submit" onClick={this.update}>Save</button>
      </div>
      </div>
      </form>
      </div>
      </div>
      </div>
      </div>


      </div>
      </div>
      </div>
      </div>
      </div>

    )

  }

});
module.exports=Display;
