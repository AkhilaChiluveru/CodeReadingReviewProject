import React from 'react';
import './input-styles.css'

export default function Input  ()  {
    return(
    <div className="countryNameInput">
       Country:  <select id = 'countryname' placeholder="Enter a country name"> 
       <option value="ae">ae</option>
       <option value="bg">bg</option>
       <option value="ca">ca</option>
       <option value="de">de</option>
       <option value="fr">fr</option>
       <option value="gb">gb</option>
       <option value="hk">hk</option>
       <option value="hu">hu</option>
       <option value="in">in</option>
       <option value="jp">jp</option>
       <option value="lt">lt</option>
       <option value="ma">ma</option>
       <option value="ng">ng</option>
       <option value="ph">ph</option>
       <option value="ro">ro</option>
       <option value="sa">sa</option>
       <option value="tr">tr</option>
       <option value="ua">ua</option>
       <option value="us">us</option>
       <option value="ve">ve</option>
       <option value="za">za</option>
       </select> 
    </div>    
    )
    
}


