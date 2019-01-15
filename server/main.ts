import mongoose from 'mongoose';

import '../build/checkVersions'; // 检查node.js和npm版本

import app from './app';
import { port, database, defaultGroupName } from '../config/server';
import Socket from './models/socket';
import Group from './models/group';
import getRandomAvatar from '../utils/getRandomAvatar';

mongoose.Promise = Promise;

mongoose.connect(database, async (err) => {
    if (err) {
        console.error('connect database error!');
        console.error(err);
        return process.exit(1);
    }

    // 判断默认群是否存在, 不存在就创建一个
    const group = await Group.findOne({ isDefault: true });
    if (!group) {
        const defaultGroup = await Group.create({
            name: defaultGroupName,
            avatar: getRandomAvatar(),
            isDefault: true,
        });
        if (!defaultGroup) {
            console.error('create default group fail');
            return process.exit(1);
        }
    }

    app.listen(port, async () => {
        await Socket.remove({}); // 删除Socket表所有历史数据
        console.log(` >>> server listen on http://localhost:${port}`);
    });
});
