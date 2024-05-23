import React from "react";
import './Translator.css'

export default function Translator(){
    return (
        <div className={'translator-container'}>
            <div>
                <input  type="text" id="user-prompt" name="user-input"/>
            </div>

            <div className={'translator-select'}>
                <div className={'translator-container-item'}>
                    <div className={'translator-container-dropdown'}>
                        <select name="origin-lang" id="lang-select">
                            <option value="">--Please choose a language--</option>
                            <option value="english">English</option>
                        </select>
                    </div>
                    {/* <div className={'translator-box'}>
                        <textarea id="origin-lang" name="origin-lang" />
                    </div> */}
                </div>
                <div className={'translator-container-item'}>
                    <div className={'translator-container-dropdown'}>
                        <select name="origin-lang" id="lang-select">
                            <option value="">--Please choose a language--</option>
                            <option value="german">German</option>
                        </select>
                    </div>
                    {/* <div className={'translator-box'}>
                        <textarea id="lang-text" name="lang-text"/>
                    </div> */}
                </div>
            </div>
            <div className={'button-container'}>
                <button className={'submit-button'} type='submit'>Create Dialogue</button>
            </div>


        </div>
    )
}
