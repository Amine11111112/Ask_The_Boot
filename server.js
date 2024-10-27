const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('مستخدم متصل');

    socket.on('message', (msg) => {
        console.log('الرسالة المستلمة: ' + msg);
        // يمكنك هنا إضافة شرط لإرسال رد من Ask The Boot
        socket.emit('message', 'Ask The Boot: مرحبًا! كيف يمكنني مساعدتك؟');
    });

    socket.on('disconnect', () => {
        console.log('مستخدم منفصل');
    });
});

server.listen(3000, () => {
    console.log('الخادم يعمل على http://localhost:3000');
});
