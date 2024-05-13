import scWrite from "get-write";  

    const sc=new scWrite()
    await sc.init({path:'./test.json'});   

console.log(sc.tag('test').got())
await sc.write({path:'./'})

//console.log(sc)
