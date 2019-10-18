import request from '@/api/request';

const app = {
  testApi: (params?: any) => {
    return request.get('/home/remind', {
      params,
      data: {
        showLoading: true,
      }
    });
  }
};

export default app;
