
const url = 'http://192.168.114.5:8000';



const sessionid = document.cookie;
const log1 =  {
  // document.cookie = "sessionid=oeschger";
  // document.cookie = "favorite_food=tripe";
  // console.log(document.cookie);
  log2: document.cookie
}

function setSessionid(params) {
  document.cookie = "sessionid="+params;
}




let getHeader=(cookie) =>{
  let arrayCookies=cookie.split(';');
  let sessionid = null;
  for (let i = 0; i < arrayCookies.length; i++) {
    let arrayCookie = arrayCookies[i].split('=');
    // console.log(arrayCookie);
    // console.log(arrayCookie[0].split(' ')[1] ? arrayCookie[0].split(' ')[1] : arrayCookie[0].split(' ')[0]);
    if((arrayCookie[0].split(' ')[1] ? arrayCookie[0].split(' ')[1] : arrayCookie[0].split(' ')[0] ) == 'sessionid'){
      sessionid = arrayCookie[1];
    }
  }
  const headers = {
    'sessionid': sessionid
    // 'Content-Type': 'application/x-www-form-urlencoded',
  };
  // if(document.cookie.sessionid!=null)
  return headers;
  // return 0;
}

var GET = (cookie) => ({
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  // headers: getHeader(document.cookie),
  headers: getHeader(cookie),
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: null // body data type must match "Content-Type" header
});


const Request = {
  del: '',
  get: suburl =>
    fetch(url+suburl,)
      .then(response => response.json())
      .then(data => data),
  put: '',
  post: ''
};


export default {Request,log1,GET,getHeader};