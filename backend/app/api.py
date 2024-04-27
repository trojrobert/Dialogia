import os
from typing import Union
from fastapi import FastAPI
from fastapi.exceptions import HTTPException

from diagloue import generate_dialogue

from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

MAX_PROMPT_LENGTH = int(os.getenv("MAX_PROMPT_LENGTH"))

app = FastAPI()


@app.get("/get_dialogue")
async def get_dialogue_api(prompt: str):
    validate_prompt_length(prompt=prompt)
    dialogue = generate_dialogue(prompt)
    return {dialogue}

def validate_prompt_length(prompt: str) -> None: 
    
    if len(prompt.split()) >= MAX_PROMPT_LENGTH: 
        raise HTTPException(
            status_code=400,
            detail=f"Input too long. Length of input = {len(prompt)}. Number of words must be less that {MAX_PROMPT_LENGTH}"
            )