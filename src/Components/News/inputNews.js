import React from 'react';
import './input-styles.css'

export default function Input  ()  {
    return(
    <div className="countryNameInput">
       Country:  <select id = 'countryname' placeholder="Enter a country name"> 
       <option value="" selected disabled hidden>Choose a country</option>
       <option value="ae">United Arab Emirates</option>
       <option value="bg">Bulgaria</option>
       <option value="ca">Canada</option>
       <option value="de">Germany</option>
       <option value="fr">France</option>
       <option value="gb">United Kingdom</option>
       <option value="hk">Hong Kong</option>
       <option value="hu">Hungary</option>
       <option value="in">India</option>
       <option value="jp">Japan</option>
       <option value="lt">ltaly</option>
       <option value="ma">Morocco</option>
       <option value="ng">Nigeria</option>
       <option value="ph">Philippines</option>
       <option value="ro">Romania</option>
       <option value="sa">Saudi Arabia</option>
       <option value="tr">Turkey</option>
       <option value="ua">Ukraine</option>
       <option value="us">United States</option>
       <option value="ve">Venezuela</option>
       <option value="za">South Africa</option>
       </select> 
    </div>    
    )
    
}


