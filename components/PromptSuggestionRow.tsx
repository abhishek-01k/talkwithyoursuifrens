import PromptSuggestion from "./PromptSuggestion"

const PromptSuggestionRow = ({ onPromptClick }: any) => {
    const prompts = [
        "Who are your Genes ?",
        "Where were you born?",
        "How many types of shorts do you have in the wardrobe?"
    ]

    return (
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, _index) => (
                // @ts-ignore
                <PromptSuggestion key={_index} text={prompt} onClick={() => onPromptClick(prompt)}/>
            ))}
        </div>
    )
}

export default PromptSuggestionRow