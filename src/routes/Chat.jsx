import { useContext, useEffect, useState } from "react"
import { useLocation } from "wouter";
import { UserChatButton } from "../components/UserChatButton"
import { GlobalContext } from "../context/GlobalContext"
import { MyMessage } from './../components/MyMessage'
import { Message } from './../components/Message'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Carousel, Grid, Gif } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch('hVETwbRcDqQCSkFhk31LmoE6z6KwNzXC');

export const Chat = () => {
    const generalUser = { id: 'general', name: 'General' }
    const [_, navigate] = useLocation()
    const { state, functions } = useContext(GlobalContext)
    const [fetchGifs, setGifs] = useState([{
        "type": "gif",
        "id": "oVQD3pdk7eI0g",
        "url": "https://giphy.com/gifs/television-hbo-oVQD3pdk7eI0g",
        "slug": "television-hbo-oVQD3pdk7eI0g",
        "bitly_gif_url": "http://gph.is/17C900M",
        "bitly_url": "http://gph.is/17C900M",
        "embed_url": "https://giphy.com/embed/oVQD3pdk7eI0g",
        "username": "",
        "source": "http://thesopranosblog.tumblr.com/post/53707955519",
        "title": "The Sopranos Television GIF",
        "rating": "g",
        "content_url": "",
        "source_tld": "thesopranosblog.tumblr.com",
        "source_post_url": "http://thesopranosblog.tumblr.com/post/53707955519",
        "is_sticker": 0,
        "import_datetime": "2013-07-23 21:31:02",
        "trending_datetime": "1970-01-01 00:00:00",
        "images": {
            "original": {
                "height": "165",
                "width": "245",
                "size": "607344",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                "mp4_size": "967089",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
                "webp_size": "521836",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.webp&ct=g",
                "frames": "27",
                "hash": "8511ad7e5647a8a6cfc60d8b8081b707"
            },
            "downsized": {
                "height": "165",
                "width": "245",
                "size": "607344",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            },
            "downsized_large": {
                "height": "165",
                "width": "245",
                "size": "607344",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            },
            "downsized_medium": {
                "height": "165",
                "width": "245",
                "size": "607344",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            },
            "downsized_small": {
                "height": "140",
                "width": "208",
                "mp4_size": "69736",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy-downsized-small.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
            },
            "downsized_still": {
                "height": "165",
                "width": "245",
                "size": "607344",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy_s.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
            },
            "fixed_height": {
                "height": "200",
                "width": "297",
                "size": "1101583",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200.gif&ct=g",
                "mp4_size": "327653",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200.mp4&ct=g",
                "webp_size": "678846",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200.webp&ct=g"
            },
            "fixed_height_downsampled": {
                "height": "200",
                "width": "297",
                "size": "293071",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200_d.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200_d.gif&ct=g",
                "webp_size": "160164",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200_d.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200_d.webp&ct=g"
            },
            "fixed_height_small": {
                "height": "100",
                "width": "149",
                "size": "279630",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100.gif&ct=g",
                "mp4_size": "63730",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100.mp4&ct=g",
                "webp_size": "190576",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100.webp&ct=g"
            },
            "fixed_height_small_still": {
                "height": "100",
                "width": "149",
                "size": "14212",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100_s.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100_s.gif&ct=g"
            },
            "fixed_height_still": {
                "height": "200",
                "width": "297",
                "size": "49382",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200_s.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200_s.gif&ct=g"
            },
            "fixed_width": {
                "height": "135",
                "width": "200",
                "size": "511296",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200w.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200w.gif&ct=g",
                "mp4_size": "137551",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200w.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200w.mp4&ct=g",
                "webp_size": "341306",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200w.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200w.webp&ct=g"
            },
            "fixed_width_downsampled": {
                "height": "135",
                "width": "200",
                "size": "141037",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200w_d.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
                "webp_size": "79156",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200w_d.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
            },
            "fixed_width_small": {
                "height": "68",
                "width": "100",
                "size": "124167",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100w.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100w.gif&ct=g",
                "mp4_size": "25193",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100w.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100w.mp4&ct=g",
                "webp_size": "93262",
                "webp": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100w.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100w.webp&ct=g"
            },
            "fixed_width_small_still": {
                "height": "68",
                "width": "100",
                "size": "6452",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/100w_s.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
            },
            "fixed_width_still": {
                "height": "135",
                "width": "200",
                "size": "23245",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/200w_s.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
            },
            "looping": {
                "mp4_size": "4241641",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy-loop.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
            },
            "original_still": {
                "height": "165",
                "width": "245",
                "size": "36722",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy_s.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
            },
            "original_mp4": {
                "height": "322",
                "width": "480",
                "mp4_size": "967089",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
            },
            "preview": {
                "height": "122",
                "width": "181",
                "mp4_size": "40837",
                "mp4": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy-preview.mp4?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
            },
            "preview_gif": {
                "height": "62",
                "width": "92",
                "size": "47537",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy-preview.gif?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
            },
            "preview_webp": {
                "height": "62",
                "width": "92",
                "size": "28974",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/giphy-preview.webp?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
            },
            "480w_still": {
                "height": "323",
                "width": "480",
                "size": "607344",
                "url": "https://media0.giphy.com/media/oVQD3pdk7eI0g/480w_s.jpg?cid=b8c58971ftr292sa7zonxb15e8q0hg12a2teukccx4ev8bij&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
            }
        },
        "analytics_response_payload": "e=Z2lmX2lkPW9WUUQzcGRrN2VJMGcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOGM1ODk3MWZ0cjI5MnNhN3pvbnhiMTVlOHEwaGcxMmEydGV1a2NjeDRldjhiaWomY3Q9Zw",
        "analytics": {
            "onload": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW9WUUQzcGRrN2VJMGcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOGM1ODk3MWZ0cjI5MnNhN3pvbnhiMTVlOHEwaGcxMmEydGV1a2NjeDRldjhiaWomY3Q9Zw&action_type=SEEN"
            },
            "onclick": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW9WUUQzcGRrN2VJMGcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOGM1ODk3MWZ0cjI5MnNhN3pvbnhiMTVlOHEwaGcxMmEydGV1a2NjeDRldjhiaWomY3Q9Zw&action_type=CLICK"
            },
            "onsent": {
                "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPW9WUUQzcGRrN2VJMGcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD1iOGM1ODk3MWZ0cjI5MnNhN3pvbnhiMTVlOHEwaGcxMmEydGV1a2NjeDRldjhiaWomY3Q9Zw&action_type=SENT"
            }
        }
    },]);
    const [term, updateTerm] = useState('dog');
    const [showGifSearch, setShowGifSearch] = useState(false);
    const [modalGif, setModalGif] = useState(false);

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

    const searchGifs = () => { 
       setGifs( giphyFetch.search(term, { offset: 0, limit: 15 }));
    }

    const handleChange = (event) => {
        updateTerm(event.target.value);
        searchGifs();
    }

    const onClickGif = () => {
        setShowGifSearch(!showGifSearch)
    }

    sendGIF(gif, e){
        console.log(gif);
        this.props.sendMessage({
            url : gif.original
        });
    }

    function GridDemo({ onGifClick }) {
        const fetchGifs = () =>
        giphyFetch.search(term, { offset: 0, limit: 10 });
        const [width, setWidth] = useState(window.innerWidth);
        return (
          <>
            <Grid
              onGifClick={onGifClick}
              fetchGifs={fetchGifs}
              width={width}
              columns={3}
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
                    {/* <img src="https://logowik.com/content/uploads/images/giphy3008.logowik.com.webp" className="h-10 w-10 object-cover border-2 border-purple-200 rounded-full cursor-pointer "></img> */}
                </form>
              
            </section>
            
            <section className="mb-5 px-60">
            <button onClick={onClickGif} className="bg-indigo-500 rounded py-1 px-4 text-white">Gif</button>
              {showGifSearch 
              ?
                <div>
                    <input onChange={handleChange} name="textGif" type="text" placeholder="Buscar ..."/>
                    <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />
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
            </div>
        )}
    </main>
}