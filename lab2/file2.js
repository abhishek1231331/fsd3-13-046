import {writeFile} from "fs/promises";

 const data= await writeFile("stud.txt","utf-8");
 console.log("File written");
 console.log(data);
