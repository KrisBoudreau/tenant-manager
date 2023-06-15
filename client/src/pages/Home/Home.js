import React from "react";

const Home = ( {name, role, email} ) => {
  return (
    <div>
        Home
        <br/>
        { 'name: ' + name } <br/>
        {'role: ' + role } <br/>
        {'email: ' + email } 
        
        
        
    </div>
  );
};

export default Home;