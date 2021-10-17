import React,{useEffect,useState} from "react";
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import "../index.css";

function Update(){
const data = useParams();
  // console.log(data.id);

  const [contact, setContact] = useState([]);

  
  const fetchData = async () =>{
      try{
         
        const get = await fetch(`/bank/contact/${data.id}`)
       const getValue = await get.json();
       setContact(getValue.data.name);
      //  console.log(getValue.data.name);
      }catch(err){
        console.log(err.message);
      }
    };
    useEffect(()=>{
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])







 var [details, setDetails] = useState([]);
 useEffect(()=>{
   const fetchData = async () =>{
     try{
         
       const get = await fetch(`/bank/${data.id}`);
      const getValue = await get.json();
      setDetails(getValue.data.name);
      // console.log(getValue.data.name);
      
     }catch(err){
       console.log(err.message);
     }
   };

   fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])





const [change, setChange] = useState({
    receiver : "",
    amount : ""
})

function handleChange(event){
   const {name, value} = event.target;

 setChange(preValue => {
     if(name === "receiver"){
         return{
         receiver: value,
         amount: preValue.amount
         }
     }else if(name === "amount"){
         return{
             receiver: preValue.receiver,
             amount: value
         }
     }
 })

}

// console.log(change.receiver);
// console.log(change.amount);


var h;
contact.forEach(contact =>{
    if(contact.name === change.receiver){
        
         h=contact.balance;
      
    }
})




var costValue = parseInt(h) + parseInt(change.amount);



var cost = parseInt(details.balance)- parseInt(change.amount);


const handleSubmit = async (event) => {
    // event.preventDefault()
    window.location.reload(true);

    alert("your transaction completed");
    try{
      axios.put(`/bank/post/${details.name}`,{
         balance:cost
      })
      axios.put(`/bank/post/${change.receiver}`,{
         balance:costValue
      })
      .then(res=>{
        console.log(res);
      })
    
      
    }catch(err){
      console.log(err);
    }
  }


  // console.log(contact.balance)


    return(
        <div>


        <table className="table container table-bordered tableCON">
        <thead>
  <tr  >
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Account Balance(Rs.)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{details.id}</th>
      <td>{details.name}</td>
      <td> {details.email}</td>
      <td>{details.balance}</td>
    </tr>
    
   
  </tbody>
  </table>

  <form className= "container">
  <div class="mb-3">
  <label >Transfer to:</label>

 
    <select className="form-select" name="receiver" onChange={handleChange}   aria-label="Default select example">
  <option selected>Choose account</option>
  
  
  {contact.map(contact=>
    <option value={
        contact.name
        }  >{contact.name}(Balance:{contact.balance}  )</option>
    
)}
  
   </select>

   

    
     </div>
  <div class="mb-3">
    <label  className="form-label">Amount</label>
    <input type="number" name = "amount" className="form-control" onChange={handleChange}/>
  </div>
  <Link to="/details">
  <button type="submit"  className="btn btn-success transfer" onClick={handleSubmit}>Transfer</button>
  </Link>
</form>
  </div>
  
    )
}

export default Update;