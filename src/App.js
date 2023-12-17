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

    const [showAdminLogin, setShowAdminLogin] = useState(false);

    const [selectedContributor, setSelectedContributor] = useState(null);

    const [contributors, setContributors] = useState(initialContributors);
    
    // const [showNewContributor, setShowNewContributor] =useState()
   

    
    
   
    
    const handleshowAddContributor =() =>{
      setShowAddContributor(show => !show)
      
    }

    const handleShowAdminLogin =() => {
      setShowAdminLogin(show => !show)
    }

    const handleAddContributors =(contributor) => {
       setContributors((contributors) => [...contributors, contributor]);
       setShowAddContributor(false)     /*hide form add contributor after addition*/
    }

    const handSelection =(contributor) =>{
      setSelectedContributor((cur) =>(cur?.id === contributor.id ? null : contributor));
      
    }

    
 
    return (
    <div className="app">
      <div className="sidebar">
        
         <ContributorList contributors={contributors}
         onSelection={handSelection} 
         selectedContributor={selectedContributor} />
        
        {showAddContributor && <FormAddContributor onAddContributor={handleAddContributors} />}
         
         <Button onClick={handleshowAddContributor}> 
         { showAddContributor ? "close" : "Add Contributor"}</Button> 
       

      
       

      </div>
        <Contributor />
      
       {showAdminLogin && <AdminLogin />}

       <button onClick={handleShowAdminLogin} className="login">{ showAdminLogin ? "X" : "Click here to login"}</button>
        
      { selectedContributor && <FormAwardEsusu selectedContributor={selectedContributor}  />}

    </div>
  );
}

const AdminLogin = () => {
 

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
 
function ContributorList({ contributors, onSelection, selectedContributor}) {
 
  
  
  
  return (
    <ul>
      {contributors.map((contributor) => (
        <Contributor 
        contributor={contributor} 
        key={contributor.id} 
        onSelection={onSelection}
        selectedContributor={selectedContributor} />
      ))}
    </ul>
  );
}
 
function Contributor({ contributor, onSelection, selectedContributor }) {
  const isSelected = selectedContributor?.id === contributor.id;
 
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={contributor.image} alt={contributor.name} />
      <h3>{contributor.name}</h3>
 
      {contributor.contribution === 20000 && (
        <p className="paid">You paid N{contribution} contribution.</p>
      )}
 
      {contributor.contribution < 20000 && (
        <p className="unpaid">You owe N{contribution} contribution.</p>
      )}
 
      <Button onClick={() => onSelection(contributor)}>PayEsusu</Button>
    </li>
  );
}





  
const FormAddContributor = ( {onAddContributor} ) => {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");


  const handleSubmit=(e) =>{
    e.preventDefault();


  if(!name || !image) return;
  const id = crypto.randomUUID();
  
  const newContributor = {
    id,
    name,
    image:`${image}?=${id}`,
    contribution: 0,

   }

   onAddContributor(newContributor);
   
   setName("");
   setImage("https://i.pravatar.cc/48");
  
  }


  
  

return(

   
    
    <form className="form-add-contributor" onSubmit={handleSubmit}>
      <label>👨‍❤️‍💋‍👨 Contributor name
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      


      <label>🌆image-url
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      
       
      <Button>Add</Button>
    </form>
  )

  
  }


  const FormAwardEsusu = ( {selectedContributor} ) => {
     return <form className="form-award-esusu">
      <h3> Award Esusu to {selectedContributor.name}</h3>

      
      
      
      <label>💰Single Esusu </label>
      <input type="text" />
      
      
     

      <label>💰{selectedContributor.name} Esusu </label>
      <input type="text" />
      

       
      <label>💰Total Esusu </label>
      <input type="text" disabled />
      


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