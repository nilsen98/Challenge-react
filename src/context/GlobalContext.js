import { createContext } from "react"

export const initialState = {
    session: undefined,
    currentChat: undefined,
    messages: {},
    onlineUsers: {},
    gifs: {}
}

const functions = {
    initSession: (username) => { },
    setCurrentChat: (user) => { },
    sendMessage: (message) => { },
    sendGif: (gif) => { },
}

export const GlobalContext = createContext({ state: initialState, functions })
