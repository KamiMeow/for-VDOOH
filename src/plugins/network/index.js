import NetworkBase from './NetworkBase';

const url = window.location.href.match(/ivnix|:8080/)
  ? 'http://localhost:3000/'
  : 'http://localhost:3000/';

class Network extends NetworkBase {
  constructor() {
    super(url);
  }

  // named methods here...
};

const net = new Network();
export default net;
