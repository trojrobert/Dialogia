from dotenv import find_dotenv, load_dotenv
from langchain_community.chat_models import ChatOllama, ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate, PromptTemplate
from langchain_openai import OpenAI

load_dotenv(find_dotenv())

OLLAMA_BASE_URL="https://61d7-107-20-19-92.ngrok-free.app"

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
        
        system_prompt = """ You are an expert at generating role play conversations in {input_lang} \
            Given an input phrase in {input_lang}, you generate a role play conversation in {input_lang}\
            between two participants with the following in JSON format: \

            Background: A short description of the a role play scenario in {input_lang}. Maximum {max_words} words. \
            <Name of First Participant>: Statement made to the second particpant in {input_lang}. Maximum {max_words} words\
            <Name of Second participant>: Response to the first participant in {input_lang}, Maximum {max_words} words. \
            """
        
        phrase = "phrase : {user_prompt}"
        
        dialogue_prompt = ChatPromptTemplate.from_messages(
            [
                ("system", system_prompt), 
                ("human", phrase)
            ]
        )
        
        return dialogue_prompt
    
    def create_ollama_llm(self):
        llm = ChatOllama(
            model=self.model,
            base_url=OLLAMA_BASE_URL, 
            format="json", 
            )
        return llm
    
    def create_openai_llm(self):
        llm = ChatOpenAI(model="gpt-3.5-turbo-0125",
                        temperature=0,
                        max_tokens=50,)
        
        return llm
    
    
    def create_chain(self): 
        dialog_prompt = self.create_dialogue_prompt()
        llm = self.create_openai_llm()
        
        chain = dialog_prompt | llm | StrOutputParser()
        
        return chain
        
        
    def generate_dialogue(self):
        
        chain = self.create_chain()
        
        response = chain.invoke({
            "input_lang": self.input_lang, 
            "user_prompt":self.user_prompt, 
            "max_words": self.max_words, 
            })
        
        print(response) 
        
        return response        
       
         
        

