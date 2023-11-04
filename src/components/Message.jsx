export const Message = ({ message }) => {
    return <>
        <div className="flex justify-end mb-3">
            <div style={{backgroundColor: '#f38aa5'}} className="max-w-sm p-5 rounded-t-lg rounded-bl-lg">
                {render(message?.message)}
            </div>
        </div>
    </>
}

const render = (message) => {
    if(message.includes("giphy.com/embed"))
    return <iframe src={message} width="100" height="100" frameBorder="0" class="giphy-embed"
    allowFullScreen></iframe>

    return <>
    <p className="text-xs font-semibold mb-1">{message.from.name}</p>
    <p>{message}</p>
    </>
}