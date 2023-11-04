export const MyMessage = ({ message }) => {
    return <>
        <div className="flex justify-end mb-3">
            <div style={{backgroundColor: '#e15c7c'}} className="max-w-sm p-5 rounded-t-lg rounded-bl-lg">
                {render(message?.message)}
            </div>
        </div>
    </>
}

const render = (message) => {
    if(message.includes("giphy.com/embed"))
    return <iframe src={message} width="100" height="100" frameBorder="0" class="giphy-embed"
    allowFullScreen></iframe>

    return <p>{message}</p>
}