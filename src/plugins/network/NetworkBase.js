import axios from 'axios';

const $RequestType = {
  GET: 'get',
  PUT: 'put',
  POST: 'post',
  DELETE: 'delete',
};

let instance = null;

export default class NetworkBase {
  constructor(url) {
    if (!instance) instance = this;
    this.$net = axios.create({
      baseURL: url,
    });

    return instance;
  }

  async $request(config = { method: 'get', url: '/ping', data: {}, params: {} }) {
    const result = await this.$net(config);
    return result.data;
  }

  setHeader(title, value) {
    this.$net.defaults.headers[title] = value;
  }

  async get(url, params) {
    return this.$request({
      url,
      params,
      method: $RequestType.GET
    });
  }

  async put(url, data) {
    return this.$request({
      url,
      data,
      method: $RequestType.PUT
    });
  }

  async post(url, data) {
    return this.$request({
      url,
      data,
      method: $RequestType.POST,
    });
  }

  async delete(url) {
    return this.$request({
      url,
      method: $RequestType.DELETE,
    });
  }
}
