import URISimple from './uri-simple';
import { nullLiteral } from '@babel/types';

export const isHttp = (url: string) => {
  return /^(http:|https:|)\/\//.test(url);
};

export const isBase64 = (url: string) => {
  return /^data:image/.test(url);
};

export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms || 0));
};

/**
 * 获取链接上匹配的参数值
 * @param {String} name
 */
export const getQueryURL = (name: string) => {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  let r = window.location.search.substr(1).match(reg);
  if (r !== null) return decodeURIComponent(r[2]);
  return nullLiteral;
};
/**
 * 获取元素content宽高
 * @param el
 */
export function getContentSize(el: HTMLElement) {
  const width = el.offsetWidth;
  const height = el.offsetHeight;
  const style = window.getComputedStyle(el);
  // border
  const blw = parseFloat(style.borderLeftWidth || '0');
  const brw = parseFloat(style.borderRightWidth || '0');
  const btw = parseFloat(style.borderTopWidth || '0');
  const bbw = parseFloat(style.borderBottomWidth || '0');
  // padding
  const plw = parseFloat(style.paddingLeft || '0');
  const prw = parseFloat(style.paddingRight || '0');
  const ptw = parseFloat(style.paddingTop || '0');
  const pbw = parseFloat(style.paddingBottom || '0');
  return {
    width: width - blw - brw - plw - prw,
    height: height - btw - bbw - ptw - pbw,
  };
}

/**
 * 本地加载获取图片宽高信息
 */
export function loadImageInfo(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const anchor = URISimple(url);
    if (isHttp(url) && window.location.host !== anchor.host()) {
      img.crossOrigin = '';
    }
    img.onload = () => {
      resolve({
        url,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = () => {
      console.log('获取图片信息失败', url);
      reject(new Error('获取图片信息失败'));
    };
    img.src = url;
  });
}
