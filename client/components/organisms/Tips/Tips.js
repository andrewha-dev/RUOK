import React from 'react';
import './Tips.css';
const Tips = () => {
        return(
         <div className="TipsContainer">
         <h3 className="TipsHeaders">Hey, you don't have a survey today!!! </h3> 
                <p className="TipsHeaders">
                        Here are some tips to avoid stress:
                </p>
                <ul className="TipsUL">

                        <li className="TipsList">1. Avoid Caffeine, Alcohol, and Nicotine.</li> 
                        <li className="TipsList">2. Indulge in Physical Activity</li> 
                        <li className="TipsList">3. Get More Sleep </li> 
                        <li className="TipsList">4. Try Relaxation Techniques </li> 
                </ul> 
        </div>
        )

}


export default Tips;