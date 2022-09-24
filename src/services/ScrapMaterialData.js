
import { myAxios } from "./helper";

let Token = JSON.parse(localStorage.getItem("data"));

const headers = {
    "Content-Type": "application/json",
     "Authorization": "Bearer "+Token.token,
  };

export const scrapMaterialData =()=> {
return myAxios.get('/apiScrapMaterial/getAllScrapMaterial',{headers}).then((Response)=>{console.log(Response.data)});
 
}

