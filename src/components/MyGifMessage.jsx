export const MyGifMessage = ({ message }) => {
    return <>
        <div className="flex justify-end mb-3">
            <div className="bg-indigo-400 max-w-sm p-5 rounded-t-lg rounded-bl-lg">
                <p>{message.message}</p>
            </div>
        </div>
    </>
}
