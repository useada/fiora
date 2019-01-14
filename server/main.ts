import * as mongoose from 'mongoose';

import '../build/check-versions'; // 检查node.js和npm版本

console.log(mongoose);

// import app from './app';
// import config from '../config/server';
// import Socket from './models/socket';
// import Group from './models/group';
// import getRandomAvatar from '../utils/getRandomAvatar';

// global.mdb = new Map(); // 作为内存数据库使用
// global.mdb.set('sealList', new Set()); // 封禁用户列表
// global.mdb.set('newUserList', new Set()); // 新注册用户列表

// mongoose.Promise = Promise;


// mongoose.connect(config.database, async (err) => {
//     if (err) {
//         console.error('connect database error!');
//         console.error(err);
//         return process.exit(1);
//     }

//     // 判断默认群是否存在, 不存在就创建一个
//     const group = await Group.findOne({ isDefault: true });
//     if (!group) {
//         const defaultGroup = await Group.create({
//             name: config.defaultGroupName,
//             avatar: getRandomAvatar(),
//             isDefault: true,
//         });
//         if (!defaultGroup) {
//             console.error('create default group fail');
//             return process.exit(1);
//         }
//     }

//     app.listen(config.port, async () => {
//         await Socket.remove({}); // 删除Socket表所有历史数据
//         console.log(` >>> server listen on http://localhost:${config.port}`);
//     });
// });
