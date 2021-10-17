import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../index.css";



var width ={
  width:"100%"
}


var thWidth={
  width: "100px"
}


var tdName ={
  width: "200px"
}


var tdEmail ={
  width: "400px"
}

var tdEmail1 ={
  width: "400px"
}

var tdBalance ={
  width: "150px"
}



var button ={
  width:"150px"
}

function Details(){

 

    const [details, setDetails] = useState([]);

    //proxy

    const fetchData = async () =>{
        try{
          const get = await fetch('/bank')
         const getValue = await get.json();
         setDetails(getValue.data.name);
        //  console.log(getValue.data.name);
        }catch(err){
          console.log(err.message);
        }
      };
   useEffect(()=>{
      fetchData();
     },[])



    return(
   <div> 
 <table className="table container   tableCON" style={width} >
<thead>
  <tr  >
      <th  >ID</th>
      <th  >Name</th>
      <th style={tdEmail1} >Email</th>
      <th >Account Balance(Rs.)</th>
    </tr>
  </thead>
  </table>
{
  details.map(details =>
    <table className="container" style={width} >
  
  <tbody>
    <tr>
      <th style={thWidth} >{details.id}</th>
      <td style={tdName}>{details.name}</td>
      <td  style={tdEmail}> {details.email}</td>
      <td style={tdBalance}>{details.balance}</td>
      <Link to={`/${details.id}/update`}>
      <button style={button} className="btn btn-success" > Transfer Money</button>
      </Link>
    </tr>
    
   
  </tbody>
</table>



  )
}


</div>       
    );
}

export default Details;