const options = require('../utils/commandOptions');

const { env } = process;

/**
 * 服务端端口号
 */
export const port: number = options.port || env.Port || 9200;

/**
 * 数据地址
 */
export const database: string = options.database || env.Database || 'mongodb://localhost:27017/fiora';

/**
 * jwt加密密钥
 */
export const jwtSecret: string = options.jwtSecret || env.JwtSecret || 'jwtSecret';

/**
 * 单个用户最多可创建的群组个数
 */
export const maxGroupsCount: number = 3;

/**
 * 七牛配置
 */
export const qiniuAccessKey: string = options.qiniuAccessKey || env.QiniuAccessKey || '';
export const qiniuSecretKey: string = options.qiniuSecretKey || env.QiniuSecretKey || '';
export const qiniuBucket: string = options.qiniuBucket || env.QiniuBucket || '';
export const qiniuUrlPrefix: string = options.qiniuUrlPrefix || env.QiniuUrlPrefix || '';

/**
 * 允许的客户端域
 * 为空则默认所有域允许访问
 */
export const allowOrigin: string = options.allowOrigin || env.AllowOrigin;

/**
 * 用户登录token过期时间
 */
export const tokenExpiresTime: number = 1000 * 60 * 60 * 24 * 7;

/**
 * 管理员用户的_id
 */
export const administrator: string = options.administrator || env.Administrator || '';

/**
 * 默认群组名称
 */
export const defaultGroupName: string = 'fiora';
