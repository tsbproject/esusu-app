const initialContributor = [
  {
    id: 118836,
    name: "Sola",
    image: "https://i.pravatar.cc/48?u=118836",
    Amount: 20000,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    Amount: 20000,
  },
  {
    id: 499476,
    name: "Ibrahim",
    image: "https://i.pravatar.cc/48?u=499476",
    Amount: 20000,
  },
];






function App() {
  return(
     <div className="app">
      <Admin />
      <ContributorList />
      <Contributor />
      <FormAddContributor />
      <FormShareContribution />
      
     </div>
  )
}



const Admin =() =>{
  return(
    <div className="admin">
      <h3>Admin Area, Welcome Contributor!</h3>
      <label >Username <input type="text" id="username"
      placeholder="enter username"></input>
      </label> 

      <label>Password < input type="text" id="password"
       placeholder="enter password"  /> 
       </label>

       <button id="login">Login</button>
      

      


    </div>
  )
}

const ContributorList=() =>{
  return(
    <div className="contriblist">
      <ul>
        {Contributors.map((contributor) =>(
          <Contributor   key={contributor.id} />
         

        ))}
      </ul>

      
    
    </div>
  )
}


const Contributor=() =>{

}



const FormAddContributor=() =>{

}



const FormShareContribution=() =>{

}



















export default App;
