function getDevRemoteEntryUrl(port) {
    return `//localhost:${port}/remoteEntry.js`;
  }
  
  function getProdRemoteEntryUrl(domain) {
    return `${domain}/remoteEntry.js`;
  }
  
  module.exports = {
    getDevRemoteEntryUrl,
    getProdRemoteEntryUrl,
  };