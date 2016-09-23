var React=require('react');
var ReactDOM=require('react-dom');
var $=require('../vendor/jquery');

var batchnam="";
var batchtyp="";
var loc="";
var candidate="";
var strtdate="";
var enddate="";
var Batch_Data=[];
var repnam=[];
var temp="";

var Home=React.createClass({

batch_name:function(event){
temp=event.target.value;
repnam.push(temp);

for(var i=0;i<repnam.length;i++)
{
  if(repnam[i]==temp)
  {
    alert("Bathch Name Already Choosed");
    document.open(_self,home);
  }
  else{
    batchnam=temp;
  }
}


},

batch_type:function(event){
  batchtyp=event.target.value;
},

location:function(event){
  loc=event.target.value;
},

participants:function(event){
  candidate=event.target.value;
},

planed_startdate:function(event){
  strtdate=event.target.value;
},

planed_enddate:function(event){
  enddate=event.target.value;
},

handleClick:function(){
  var myobj={};
  myobj["Batch_Name"]=batchnam;
  myobj["Batch_Type"]=batchtyp;
  myobj["Location"]=loc;
  myobj["Candidate"]=parseInt(candidate);
  myobj["Start_Date"]=strtdate;
  myobj["End_Date"]=enddate;
  //console.log(myobj);
Batch_Data=myobj;
console.log("in handleClick");
console.log(Batch_Data);
  $.ajax({
    type:'POST',
    cache:false,
    data:Batch_Data,
    url:'http://localhost:8082/details/add',
    success: function(data){
      console.log("success in handleClick func");
    }.bind(this),
    error:function(err){
      console.log("error in handleClick func");
      console.log(err);
    }.bind(this)
  });
},



render:function(){
return(
<div className="container">
<center>
Batch Name&nbsp;: &nbsp;&nbsp;<input type="text" onChange={this.batch_name} />
</center><br /><br />
<center>
Batch Type&nbsp;: &nbsp;&nbsp;<input type="text" onChange={this.batch_type} />
</center><br /><br />
<center>
Location&nbsp;: &nbsp;&nbsp;<input type="text" onChange={this.location} />
</center><br /><br />
<center>
Number Of Participants&nbsp;: &nbsp;&nbsp;<input type="text" onChange={this.participants} />
</center><br /><br />
<center>
Planned Start Date&nbsp;: &nbsp;&nbsp;<input type="Date" onChange={this.planed_startdate} />
</center><br /><br />
<center>
Planned End Date&nbsp;: &nbsp;&nbsp;<input type="Date" onChange={this.planed_enddate} />
</center><br /><br />
<center>
<button type="button" onClick={this.handleClick}>Add Detail</button>
</center>

</div>
)
}
})



module.exports=Home;
