### file-get    
    get a file from path and write the data to file by json

## Install

`npm i get-write`

## Usage    

```js
import scWrite from "get-write";  

    const sc=new scWrite()
    await sc.init({path:'./test.json'});   

console.log(sc.tag('test').got())
await sc.write({path:'./'})

//console.log(sc)
```

## License

Licensed under [MIT](https://github.com/scpub/get-write/blob/main/LICENSE)
