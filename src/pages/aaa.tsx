import React from 'react';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { Button } from 'antd';

interface PageProps {
  name: string;
  getHomeRemid: () => void;
}

@connect(({ layout }: { layout: any }) => ({
  ...layout
}), (dispatch: Dispatch<any>) => ({
  getHomeRemid() {
    return dispatch({
      type: 'layout/getHomeRemid'
    });
  }
}))
class AAA extends React.PureComponent<PageProps, any> {
  public componentDidMount() {
    this.props.getHomeRemid();
  }

  public render() {
    const { name } = this.props;
    return (
      <div>
        <Button type='primary'>{name}</Button>
      </div>
    );
  }
}

export default AAA;
