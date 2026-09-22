# CSE-13-FSD


npm: node package manager
this is used to install run , uninstall any program/project and ackage
-npm install <packageName>
-npm uninstall <packageName>

to use npm , the project must be npm project,
to create npm project we can use 
-npm init -y
it create a package.json file automatically
package.json holds all the information related to install package from npm
-it also creates a folder node_modules automatically
-node_modules holds the pacakages/library files.
-generally we ignore the node_modules by .gitignore

-Nodemon - it restart the server automatically when file changes,to install
-npm i nodemon -D

note: -D flag will install this package as developer depedency
-to execute any programm update the package.json file
the start the server as 
<b> npm run dev</b>
-start=> it will execute the app on deployement
--dev=> it will start server in devlopment phase(only for developers)

-res it will return contents (json/html/plain) to the user/client
-req:it will retive the information from client to the server
-server send slso statuscodes to the client that indicates th error/success message

##status code
req → client se server

res → server se client

200 → OK / Request successful

201 → Created

400 → Bad Request

401 → Unauthorized

403 → Forbidden

404 → Not Found

500 → Internal Server Error



##contet types

-text/plain
-text/html
-application/json
-text/css

the content type ansstatus code can be send back to client by two ways

1.res.writeHead
2.res.setHeader
3.res.statuscode

##response as html content 
1.res end
> -end("any html contest/tag")

2. html file
> - read by create


##send html file to client
1.html file

-read html file using createReadStream
-pipe it with res object

2.html content
>send any html tags/content by using res.end("<any html tag>")


#JSON
> - server return data only not only html content because html content will be reatain by content developer . the data is in json format

JSON FORMAT>- json always stores data in key value pairs inclosed by curly brackets array can be stored  by square bracket one pair of curly bracket will represnt one ojbect and its property will be separated by comma eg:``` ``` inclosed in between


eg: ```{id:1,name:"abhishek" 
, price: 45,
rating:4.5,
review:200}```


