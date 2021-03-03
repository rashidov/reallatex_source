export default function addLocalStorage(obj, key){
  let array = localStorage.getItem(key);
  if(!array){
      localStorage.setItem(key, JSON.stringify(obj));
  } else if(array){
      let parseArry = JSON.parse(array);
      if(parseArry.length >= 1){
          for(let i = 0; i < parseArry.length; i++){
              if(parseArry[i].id === obj[0].id){ 
                  obj[0].counter = parseArry[i].counter + obj[0].counter;
                  parseArry.splice(i, 1);
                  localStorage.removeItem(key);
                  localStorage.setItem(key, JSON.stringify(parseArry.concat(obj)));
              } else {
                  localStorage.removeItem(key);
                  localStorage.setItem(key, JSON.stringify(parseArry.concat(obj)));
              };
          };
      };
  };
};