import { useContext, useEffect, useState } from "react"
import { useLocation } from "wouter";
import { UserChatButton } from "../components/UserChatButton"
import { GlobalContext } from "../context/GlobalContext"
import { MyMessage } from './../components/MyMessage'
import { Message } from './../components/Message'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Grid, Gif } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch('hVETwbRcDqQCSkFhk31LmoE6z6KwNzXC');

export const Chat = () => {
    const generalUser = { id: 'general', name: 'General' }
    const [_, navigate] = useLocation()
    const { state, functions } = useContext(GlobalContext)
    const [term, updateTerm] = useState('dog');
    const [showGifSearch, setShowGifSearch] = useState(false);
    const [modalGif, setModalGif] = useState(undefined);

    useEffect(() => {
        if (state.session) return;
        navigate('/')
    }, [])

    useEffect(() => {
        functions.setCurrentChat(generalUser)
    }, [])

    const onSubmitMessage = (event) => {
        event.preventDefault();
        functions.sendMessage(event.target.texttosend.value)
        event.target.texttosend.value = ''
    }



    const handleChange = (event) => {
        updateTerm(event.target.value);
        searchGifs();
    }

    const onClickGif = () => {
        setShowGifSearch(!showGifSearch)
    }

    const onSubmitGif = (event) => {
        event.preventDefault();
        console.log("eve",event)
        functions.sendMessage(event.target.giftosend.value);
        event.target.giftosend.value=''
        setShowGifSearch(!showGifSearch)
    }

    function GridDemo({ onGifClick }) {
        const fetchGifs = () =>
        giphyFetch.search(term, { offset: 0, limit: 5 });
        const [width, setWidth] = useState(window.innerWidth);
        return (
          <>
            <Grid
              onGifClick={onGifClick}
              fetchGifs={fetchGifs}
              width={200}
              height={200}
              columns={1}
              gutter={6}
            />
            <ResizeObserver
              onResize={({ width }) => {
                setWidth(width);
              }}
            />
          </>
        );
    }

    return <main className="h-screen w-screen flex">
        <aside className="h-screen w-[300px] bg-indigo-500">
            <p className="my-10 flex items-center justify-center font-bold text-white">REACT CHAT</p>
            <div className="mx-2 border border-indigo-400 mb-5" />
            <UserChatButton key={'general'} user={generalUser} alwaysOnline />
            {Object.entries(state.onlineUsers).map(([key, value]) => {
                if (key == state.session.id) return <></>
                return <UserChatButton key={key} user={value} />
            })}
        </aside>
        <section className="h-full w-full bg-indigo-100 flex flex-col">
            <header className="h-10 w-full bg-indigo-500 flex items-center font-semibold text-white">
                Chat General
            </header>
            <section className="h-full w-full px-40 py-10 overflow-auto">
                {(state.messages[`${state.session?.id}-${state.currentChat?.id}`] || []).map(message => {
                    if (message.from.id == state.session.id) {
                        return <MyMessage key={message.id} message={message} />
                    }
                    return <Message key={message.id} message={message} />
                })}
            </section>
            <section className="mb-5 px-40">
                <form onSubmit={onSubmitMessage} className="flex gap-4">
                    <input name="texttosend" type="text" className="border rounded w-full px-2" />
                    <button className="bg-indigo-500 rounded py-1 px-4 text-white">Send</button>
                </form>
            </section>
            <section className="mb-5 px-60">
            <button style={{position:'fixed',top:'90.35%',right:'13.5%'}} onClick={onClickGif} className="bg-indigo-500 rounded py-1 px-4 text-white">Gif</button>
              {showGifSearch
              ?
                <div>
                    <input onChange={handleChange} name="textGif" type="text" placeholder="Buscar ..."/>
                </div>
                :
                <div></div>
              }
            </section>
        </section>
        {showGifSearch &&
            <GridDemo
            onGifClick={(gif, e) => {
            console.log("gif", gif);
            e.preventDefault();
            setModalGif(gif);
            }}
        />}
{modalGif && (
            <div
                style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, .8)"
                }}
                onClick={(e) => {
                e.preventDefault();
                setModalGif(undefined);
                }}
            >
                <Gif gif={modalGif} width={200} />
                <form onSubmit={onSubmitGif} >
                    <input type="text" defaultValue={modalGif.embed_url} name="giftosend"/>
                    <button className="bg-indigo-500 rounded py-1 px-4 text-white">Send</button>
                </form>
            </div>
            
        )}
    </main>
}