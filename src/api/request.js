
//接口请求

export default (type, url, date, callback) => {

  if(!type){
    console.log('请求方式未定义...')
    return;
  }

  if(!url){
    console.log('请求地址为空...')
    return;
  }

  axios[type](url, date).then( res => {
    if(res &&　res.data){
      if(callback) callback(res.data)
    }
  }).catch( err => {
    console.warn('请求出错, 请检查网络是否良好 !');
  });
}
