import request from '../utils/xhr';

export async function ajax_demo() {
    return request('');
  }

  export async function ajax_demo2(params) {
    return request('...path', {
      method: 'POST',
      body: {
        ...params,
        method: 'post',
      },
    });
  }  