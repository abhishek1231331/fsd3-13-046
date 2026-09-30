# Express

1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
5. open package.json
   a.change `type:'module'`
   b.update script{
   "start":"node prg1.js",
   "dev":"nodemon prg1.js"
   }
6. create prg1.js in folder
7. add folderName/node_moduoles in .gitignore\

## map

this function is use to iterate any array it must return new array


syntax
<!-- ``` 
array.map((item)=>{
   return
})
array.map((item)=>())

``` -->
we have to use explicit return keyword whereas in syntax 2 their is not.
exclude number of properties from any json object .

search :=
to search any item in json array we use find method it will return NULL on umsuccessful all object on successfull v