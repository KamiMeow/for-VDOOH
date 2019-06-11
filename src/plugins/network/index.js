import NetworkBase from './NetworkBase';

const url = window.location.href.match(/ivnix|:8080/)
  ? 'https://maps.back.ivnix.com/api/'
  : 'https://maps.back.ivnix.com/api/';

class Network extends NetworkBase {
  constructor() {
    super(url);
  }

  // named methods here...
}

const net = new Network();
export default net;
