import request from './request';

const api = {
  testApi: (params: any) => {
    return request.get('/home/remind', {
      params,
      data: {
        showLoading: true,
      }
    });
  }
};

export default api;
