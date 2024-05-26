"use-client"
import Image from "next/image"
import suifrensloggo from "@/public/suifrens.png"
import { useChat } from "ai/react"
import LoadingBubble from "@/components/LoadingBubble"
import PromptSuggestionRow from "@/components/PromptSuggestionRow"
import { Message } from "ai"
import Bubble from "@/components/Bubble"

export default function Home () {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.length === 0

    const handlePrompt = (prompt : any) => {
        console.log(prompt)
        const msg: Message = { id: crypto.randomUUID(), content: prompt, role: 'user'}
        append(msg)
    }

    return (
        <main>
            <Image src={suifrensloggo} height="75" alt="suifrens Logo"/>
            <section className={noMessages ? "" : "populated"}>
                {noMessages? (
                    <>
                        <p className="starter-text">The Ultimate place to chat with your Sui Frens Capy's and Sharks!
                            Ask them anything about them including their genes , where they were born, their attributes
                            anything about them and have one to one chat with your Sui Frens
                            and it will come back with the most up-to-date answers.
                            We hope you enjoy!
                        </p>
                        <br/>
                        <PromptSuggestionRow onPromptClick={handlePrompt}/>
                    </>
                ) : (
                    <>
                        { messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>) }
                        {isLoading && <LoadingBubble/>}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input className="question-box" onChange={handleInputChange} value={input} placeholder="Ask me something..."/>
                <input type="submit"/>
            </form>
        </main>
    )
}