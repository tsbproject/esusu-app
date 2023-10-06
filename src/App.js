function App() {
  return(
     <div>
      <Admin />
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



















export default App;
