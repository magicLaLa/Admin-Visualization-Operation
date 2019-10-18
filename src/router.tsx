import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';

import LayOut from './layout';
import { config } from './routes';
const { menuGlobal } = config;
const { ConnectedRouter } = routerRedux;

interface RoutersProps {
  history: any;
  app: any;
}

// TODO: 待优化，扁平化路由数组
const reduceDimension = (arr: Array<any>) => {
	let ret: Array<any> = [];
	let toArr = function(arr: Array<any>){
		arr.forEach(function(item){
			Array.isArray(item.childRoutes) ? toArr(item.childRoutes) : ret.push(item);
		});
	};
	toArr(arr);
	return ret;
};

const routeslist = reduceDimension(menuGlobal);

console.log('routeslist', routeslist);

function RouterConfig({ history, app }: RoutersProps): React.ReactNode {

  return (
    <ConnectedRouter history={history}>
      <LayOut>
        <Switch>
          {
            routeslist.map(({path, ...dynamics}, index) => (
              <Route
                key={index}
                path={path}
                exact
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
        </Switch>
      </LayOut>
    </ConnectedRouter>
  );
}

export default RouterConfig;
