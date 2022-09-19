import  './LightDarkmode.css'
import img1 from './image/1.jpg';
import img2 from './image/2.jpg';
import img3 from './image/3.jpg';
import { useEffect, useState } from 'react';

const LightDarkmode = () => {
    const getmode =()=>{
        const initialmode = localStorage.getItem('mode'); //ebteda meghdar item mode ro az localStorage daryaft mikonim
        if(initialmode == null){ //agar meghadr mode dar localStorage null bod yani avalin bar varde sait shodim biad va karhayi ke migam ro anjam bede
            if(window.matchMedia("(prefers-color-scheme : dark)").matches){ // yani agr tem windos karbar dark bod bia ba true ro return kon
                return true;
            }else{
                return false; //dar gheyre in sorat return kon false
            }
        }else{ // va agar in meghdar initialmode null nabod bia az local storage meghdar mode ro begir va return kon
            return JSON.parse(localStorage.getItem("mode"))
        }
    } // darnahayat khroji in function true / false khahad bod 
    

    const [dark, setDark] = useState(getmode());

    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(dark)) ; // inja zamani ke component ijad shod ya azamani ke dark taghir kone yek object bename mode va ba meghdar dark dar local storage zakhire mikone
    },[dark])

    return ( 
        <div className={`app ${dark?'darkmode':''}`}>
        <header className="header">
          <div className="container">
            <div className="nav">
              <ul>
                <li>خانه</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
              </ul>
              <label className="switch">
                <input 
                 type="checkbox"
                  onChange={()=> setDark(!dark)}
                  checked={dark}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </header>
        <div className="content">
            <div className="container">
              <h1>{dark ? "دارک مود فعال شده و فضای دارک داریم" : "لایت مود فعال شده و فضا روشنه"}</h1>
              <p>این لایت مود است و الان صفحه سفید است</p>
            </div>
            <div className="container">
              <div className="card">
                <div className={`card-item ${dark?'darkmode':''}`}>
                  <img src={img1} alt="" />
                  <h2>کارت اول</h2>
                  <p>این کارت اول است</p>
                </div>
                <div className={`card-item ${dark?'darkmode':''}`}>
                  <img src={img2} alt="" />
                  <h2>کارت دوم</h2>
                  <p>این کارت دوم است</p>
                </div>
                <div className={`card-item ${dark?'darkmode':''}`}>
                  <img src={img3} alt="" />
                  <h2>کارت سوم</h2>
                  <p>این کارت سوم است</p>
                </div>
              </div>
            </div>
        </div>
      </div>
       );
}
 
export default LightDarkmode;