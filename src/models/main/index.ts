import app from '@/services/app';
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { State } from './interface';

interface MainModelType {
  namespace: 'layout';
  state: State;
  effects: {
    getHomeRemid: Effect;
  };
  reducers: {
    updateState: Reducer<State>;
  };
}

const App: MainModelType = {
  namespace: 'layout',
  state: {
    name:'这是aaa的model',
  },
  effects: {
    * getHomeRemid(_, { call, put }) {
      const data = yield call(app.testApi);
      yield put({
        type: 'updateState',
        payload: {
          text: data.data.bubble.text,
        },
      });
    }
  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        name: payload.text
      };
    }
  },

};

export default App;
