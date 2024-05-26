const PromptSuggestion = ({ text, onClick }: any) => {
    return (
        <button onClick={onClick} className="prompt-suggestion-button">
            {text}
        </button>
    )
}

export default PromptSuggestion