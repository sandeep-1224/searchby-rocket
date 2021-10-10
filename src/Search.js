import React,{ useState } from "react";
import Data from './Data';

const Search = () =>{
    const [ img, setImg] = useState("");
    const images = (event) => {
        const data = event.target.value;
        console.log(data);
        setImg(data);
    };
    return(

        <> 
        <div className="text-center">
        <h1> Here we can search all types of images</h1>
        <input type ="text" placeholder="Search Anything" 
        value={img}
        
        onChange=
        {images}/>
        <Data name= {img}/>
        </div>
        
        
        </>
    )
};
export default Search;