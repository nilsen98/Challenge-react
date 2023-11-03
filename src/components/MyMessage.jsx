import { isNil } from "lodash"
import { Gif } from "@giphy/react-components";

export const MyMessage = ({ message }) => {
    return <>
        <div className="flex justify-end mb-3">
            <div className="bg-indigo-400 max-w-sm p-5 rounded-t-lg rounded-bl-lg">
            <p>{
            message?.message}</p>
            {console.log("msg",message)}
            </div>
        </div>
        {<img src={message.message} className="h-10 w-10 object-cover border-2 border-purple-200 rounded-full cursor-pointer "></img>}
    </>
}
