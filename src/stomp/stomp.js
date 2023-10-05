import * as Stomp from 'stompjs'

const ws = new WebSocket("ws://127.0.0.1:15674/ws")
const stomp = Stomp.over(ws)

export const connectStomp = () => new Promise((resolve, reject) => {
    stomp.connect('guest', 'guest', () => resolve(stomp), () => reject(), '/')
})
