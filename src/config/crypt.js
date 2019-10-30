
export function encrypt(key, value) {
    let result="";
    for(let i=0;i<value.length;++i)
    {
      result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
    }
    return result;
  }
  
export function decrypt(key, value)
  {
   let result="";
    for(let i=0;i<value.length;++i)
    {
      result+=String.fromCharCode(key[i % key.length]^value.charCodeAt(i));
    }
    return result;
  }