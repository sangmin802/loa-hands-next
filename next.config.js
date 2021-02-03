module.exports = {
  webpack : (config, {
    isServer
  }) => {
    if(!isServer){
      config.node = {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
      }
    }else{
    }
    return config
  }
}