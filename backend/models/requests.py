from pydantic import BaseModel 

class UserRequest(BaseModel):
    model: str 
    user_prompt: str
    input_lang: str
    output_lang: str