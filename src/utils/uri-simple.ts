class SimpleUri {
  private url: string;
  private anchor: HTMLAnchorElement;

  public constructor(url: string) {
    this.url = url;
    this.anchor = document.createElement('a');
    this.anchor.href = this.url;
  }
  /**
   * 传入ip地址将返回空字符串
   * todo: www.songzhaopian.com => api.songzhaopian.com，去掉三级域名
   */
  public domain() {
    const hostname = this.anchor.hostname;
    if (/^(\d+\.){3}\d+$/.test(hostname)) {
      return '';
    } else {
      return hostname;
    }
  }
  public hostname() {
    return this.anchor.hostname;
  }
  public search() {
    return this.anchor.search;
  }
  public pathname() {
    return this.anchor.pathname;
  }
  public host() {
    return this.anchor.host;
  }
}

const URISimple = (url: string) => {
  const uri = new SimpleUri(url);
  return uri;
};
export default URISimple;
