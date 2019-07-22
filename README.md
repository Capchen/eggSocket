# eggSocket
use Egg show socket
# init
npm install
# dev
npm run dev
## 说明
客户端使用socket.io
```js
const socket = require('socket.io-client')('http://127.0.0.1:7002')

socket.on('connect', () => {
  console.log('connect!')
  socket.emit('chat', 'hello world!')
})

socket.on('res', msg => {
  console.log('res from server: %s!', msg)
})
```
实现socket推送发消息