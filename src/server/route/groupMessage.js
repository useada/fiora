const User = require('../model/user');
const Group = require('../model/group');
const GroupMessage = require('../model/groupMessage');
const isLogin = require('../police/isLogin');

const GroupMessageRoute = {
    'POST /groupMessage': function* (socket, data, end) {
        yield* isLogin(socket, data, end);

        const user = yield User.findById(socket.user);
        const group = yield Group.findById(data.linkmanId);
        const message = new GroupMessage({
            from: user,
            to: group,
            type: 'text',
            content: data.content,
        });

        let savedMessage = null;
        try {
            savedMessage = yield message.save();
            group.messages.push(savedMessage);
            yield group.save();
        }
        catch (err) {
            end(500, { msg: 'server error when save new message' });
        }

        socket.to(group._id.toString()).emit('groupMessage', savedMessage);

        end(201, savedMessage);
    },
};

module.exports = GroupMessageRoute;
