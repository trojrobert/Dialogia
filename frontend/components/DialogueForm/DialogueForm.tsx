import React, { ChangeEvent } from "react";
import './DialogueForm.css'

type FormProps= {
    onSubmit : (e:React.FormEvent<HTMLFormElement>) =>void;
    onPromptChange : (e:ChangeEvent<HTMLInputElement>)=>void
    prompt: string
}
export default function DialogueForm ({onSubmit,onPromptChange,prompt}:FormProps){
    return (
        <div className={'form-container'}>
            <form id={'dialogueForm'} onSubmit={onSubmit}>
                <input
                    className={'dialog-input'}
                    type="text"
                    placeholder='Enter Prompt ...'
                    value={prompt}
                    onChange={onPromptChange}>
                </input>
                <button className={'submit-button'} type='submit'>Create Dialogue</button>
            </form>

        </div>
    )
}
