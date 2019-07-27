const options = require('../utils/commandOptions');

const {
    env,
} = process;

module.exports = {
    // service port
    port: options.port || env.Port || 9200,

    // mongodb address
    database: options.database || env.Database || 'mongodb://root:123456@127.0.0.1:27017/fiora',

    // jwt encryption secret
    jwtSecret: options.jwtSecret || env.JwtSecret || 'jwtSecret',

    // Maximize the number of groups
    maxGroupsCount: 3,

    // qiniu config
    qiniuAccessKey: options.qiniuAccessKey || env.QiniuAccessKey || '',
    qiniuSecretKey: options.qiniuSecretKey || env.QiniuSecretKey || '',
    qiniuBucket: options.qiniuBucket || env.QiniuBucket || '',
    qiniuUrlPrefix: options.qiniuUrlPrefix || env.QiniuUrlPrefix || '',

    allowOrigin: options.allowOrigin || env.AllowOrigin,

    // token expires time
    tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,

    // administrator user id
    administrator: options.administrator || env.Administrator || '5d3b443b937df94736ee20ac',

    // default group name
    defaultGroupName: '北京吃喝玩乐',
};
