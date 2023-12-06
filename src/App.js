import { useState } from "react";



const initialContributors = [
  {
    id: 118836,
    name: 'Ade',
    image: 'https://i.pravatar.cc/48?u=118836',
    contribution: 20000,
  },
  {
    id: 933372,
    name: 'James',
    image: 'https://i.pravatar.cc/48?u=933372',
    contribution: 20000,
  },
  {
    id: 499476,
    name: 'Bisola',
    image: 'https://i.pravatar.cc/48?u=499476',
    contribution: 0,
  },
];

const contribution = 20000;

const Button = ({children, onClick}) => {
  return <button className="button" onClick={onClick}>{children}</button>
   
}
 
  function App() {
   
    const [showAddContributor, setShowAddContributor] = useState(false);

    const handleshowAddContributor =() =>{
      setShowAddContributor(show => !show)
    }
 
    return (
    <div className="app">
      <div className="sidebar">
        
        <ContributorList contributors={initialContributors} />
        {showAddContributor && <FormAddContributor />}
         <Button onClick={handleshowAddContributor}> Add Contributor</Button> 
       

      
       

      </div>
        <Admin />
        <FormAwardEsusu  />
    </div>
  );
}
 
const Admin = () => {
  return (
    <div className="admin-form">
      <h3>Admin area, Welcome Contributor!</h3>

      <label> Username{' '} </label>
      <input type="text" id="username" placeholder="enter username" />
 
      <label password> Password{' '}</label>
      <input type="password" id="password" placeholder="enter password" />
 
      <Button>Login</Button>
    </div>
  );
};
 
function ContributorList({ contributors }) {
  return (
    <ul>
      {contributors.map((contributor) => (
        <Contributor contributor={contributor} key={contributor.id} />
      ))}
    </ul>
  );
}
 
function Contributor({ contributor}) {
  return (
    <li>
      <img src={contributor.image} alt={contributor.name} />
      <h3>{contributor.name}</h3>

      {contributor.contribution === 20000 && (
          <p className="paid"> You paid N{contribution} contribution.
          </p>
          
   
      )}



       {contributor.contribution < 20000 &&(
          <p className="unpaid"> You owe N{contribution} contribution.
          </p>

        
      )}

    
      
      <Button>Select</Button>  
        
    </li>
  );
}





const FormAddContributor = () => {
  return(
    <form className="form-add-contributor">
      <label>👨‍❤️‍💋‍👨 Contributor name
      <input type="text" />
      </label>
      


      <label>🌆image-url
      <input type="text" />
      </label>
      
       
      <Button>Add</Button>
    </form>
  )
  }


  const FormAwardEsusu = () => {
     return <form className="form-award-esusu">
      <h3> Award Esusu to X</h3>

      
      
      
      <label>💰Single Esusu </label>
      <input type="text" />
      
      
     

      <label>💰X Esusu </label>
      <input type="text" />
      

       
      <label>💰Total Esusu </label>
      <input type="text" />
      


      <label>⛹️‍♀️Who is taking Esusu ? </label>
      <select>
          <option>Ade</option>
          <option>James</option>
          <option>Bisola</option>
          <option>X</option>
      </select>
     


      

      <Button>Award Esusu</Button>
     </form>

    


  }

  export default App;