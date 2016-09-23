var React =require('react');
var Display=require('./Display.js');


var MyFavourites =React.createClass({

  getInitialState: function(){
    return ({data:[]})

  },


  //showResult Method
  showResult: function(response) {

    this.setState({
      data: response
    });
  },
  //making ajax call to get data from server
  getDataFromServer:function(){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://localhost:8080/movie/fav",
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

componentDidMount:function(){
  this.getDataFromServer();
},

  render:function(){
    console.log(this.state.data);

        var result = this.state.data.map(function(search)
        {
          return (
            <div>
              <Display  searchs={search}/>
            </div>
                );
        });

    return(
     <div>
         <h2>Smile</h2>
         <h1>Favourites movies.</h1>
          {result}
     </div>
    )
  }
});
module.exports=MyFavourites;
