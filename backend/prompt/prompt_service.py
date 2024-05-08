
from langchain_core.prompts import ChatPromptTemplate

class PromptService:

    def __init__(self, 
                 model,
                 user_prompt: str, 
                 input_lang: str, 
                 output_lang: str, 
                 max_words: int):
        self.model = model 
        self.user_prompt = user_prompt
        self.input_lang = input_lang
        self.output_lang = output_lang
        self.max_words = max_words

    def create_dialogue_prompt(self) -> str: 
        
        system_prompt = """ You are an expert at generating role play conversations in {self.input_lang} \
            Given an input phrase in {self.input_lang}, you generate a role play conversation in {self.input_lang}\
            between two participants with the following in JSON format: \

            Background: A short description of the a role play scenario in {self.input_lang}. Maximum {self.max_words} words. \
            <Name of First Participant>: Statement made to the second particpant in {self.input_lang}. Maximum {self.max_words} words\
            <Name of Second participant>: Response to the first participant in {self.input_lang}, Maximum {self.max_words} words. \
            """
        
        phrase = "phrase : {self.user_prompt}"
        
        dialogue_prompt = ChatPromptTemplate.from_messages(
            [
                ("system", system_prompt), 
                ("user", phrase)
            ]
        )
        
        return dialogue_prompt
        

