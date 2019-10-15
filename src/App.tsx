import React from 'react';
import { Button } from 'antd';
import Api from '@/api/index';
import './App.css';

Api.testApi({ limt: 1 }).then((res: any) => {
  console.log('res', res);
}).catch((err: any) => {
  console.log('err', err);
});

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button type='primary'>Button</Button>
    </div>
  );
};

export default App;
