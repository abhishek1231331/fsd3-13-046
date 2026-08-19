# FS (File System) Module - Node.js

<!-- It directly interacts with the operating system's file system, not the browser. -->

## Major Tasks of FS Module

1. Reading and Writing Files
   - writeFile()
   - readFile()
   - appendFile()

2. Directory Management
   - mkdir()
   - readdir()
   - rmdir()

3. File Metadata / Information
   - stat()
   - lstat()
   - fstat()

4. File Operations
   - rename()
   - truncate()
   - unlink()
   - link()
   - symlink()

5. Watching for Changes
   - watch()
   - watchFile()

6. Streaming Large Files
   - createReadStream()
   - createWriteStream()


   ## crud operations

   create/insert,read/retrieve,updtae,delete
   each item(id,name,price,Qty)

   features:
       1- add to cart
       2- show cart
       3- remove from cart
       4- updtae quantity from cart
       5-checkout
        note: all items will be stored in hdd,so after termination of program we can retrieve  cart details


       ##required files that are required
       1-crud.js-it contains all the methodsand entry points
       2-product.json-it contains the product details in array form.

