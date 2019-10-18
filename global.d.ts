declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module 'dva/dynamic' {
  const dynamic: (config: any) => React.ComponentType;
  export default dynamic;
}


