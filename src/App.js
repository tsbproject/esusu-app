const initialContributors = [
  {
    id: 118836,
    name: "Ade",
    image: "https://i.pravatar.cc/48?u=118836",
    contribution: 20000,
  },
  {
    id: 933372,
    name: "Sjames",
    image: "https://i.pravatar.cc/48?u=933372",
    contribution: 20000,
  },
  {
    id: 499476,
    name: "Bisola",
    image: "https://i.pravatar.cc/48?u=499476",
    contribution: 20000,
  },
];






function App() {
  return(
     <div className="app">
      <div className="sidebar">
      <Admin />
      <ContributorList />
      <Contributor />
     
      </div>
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



function ContributorList({ contributors }) {
  contributors = initialContributors;
 
  return(
  <ul>
    {contributors.map((contributor) =>(
      <Contributor contributor={contributor} key={contributor.id} />

    ))}
  </ul>

 );

}

function Contributor({ contributor }) {
  return(
    <li>
      <img src={contributor.image} alt={contributor.name} />
      <h3>{contributor.name}</h3>
    </li>
  )

}






 export default App;
