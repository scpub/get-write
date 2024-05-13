import { join } from 'node:path';
import fs from 'node:fs';

class scwrite {
    #sc;
    #scget
    #writen
    write
    tag
    constructor(opt) {
        if(!opt)return
        (async () => {await this.init(opt)})()
    }

    async #read(e){
      if(!e)return
        return new Promise((resolve, reject) => {    
            const s = fs.createReadStream(join(e.path), 'utf8');
            let f = '';   
            s.on('data', (k) => {f += k});
            s.on('end', () => {resolve(f)});    
            s.on('error', (r) => {reject(r)});
        })     
    }

    
  
  async init(e){
    const t=this
    await t.#read(e).then(function(o){ 
        t.#sc=JSON.parse(o)
        t.#scget=function(id){
            const sc=this.#sc;
            const got=(e)=>{return e?sc[id][e]:sc[id]}
            return {got}
        }
        t.#writen=async function(e){
            if(!e)return
            return new Promise((resolve, reject) => {    
              const filename=e.filename || `f${Date.now()}`
              const ws = fs.createWriteStream(`${e.path}${filename}.json`, { encoding: 'utf8' });
              ws.on('error', (err) => { ws.close();reject(err)});
              ws.on('finish', () => {resolve()});
              const f =JSON.stringify(t.#sc); 
              ws.write(f);ws.end()
            })    
        }
        t.write=async function(e){return await t.#writen(e)}
        t.tag=function(e){return t.#scget(e)}
    });    
   }
}

export default scwrite
