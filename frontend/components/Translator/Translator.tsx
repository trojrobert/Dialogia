import React from "react";
import './Translator.css'

export default function Translator(){
    return (
        <div className={'translator-container'}>
            
            <input  type="text" id="user-prompt" name="user-input"/>
    
            <div className={'translator-container-item'}>
                <select name="origin-lang" id="lang-select">
                    <option value="">Input Language</option>
                    <option value="english">English</option>
                </select>
            </div>
            {/* <div className={'translator-box'}>
                <textarea id="origin-lang" name="origin-lang" />
            </div> */}
            
        
            <div className={'translator-container-dropdown'}>
                <select name="origin-lang" id="lang-select">
                    <option value="">Output Language</option>
                    <option value="german">German</option>
                </select>
            </div>
            {/* <div className={'translator-box'}>
                <textarea id="lang-text" name="lang-text"/>
            </div> */}
       
            <div className={'button-container'}>
                <button className={'submit-button'} type='submit'>Create Dialogue</button>
            </div>


        </div>
    )
}
