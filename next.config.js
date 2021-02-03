const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  assetPrefix : !debug ? '/loa-hands-next/' : '',

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