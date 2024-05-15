from dotenv import find_dotenv, load_dotenv
from langchain_community.chat_models import ChatOllama, ChatOpenAI
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate, PromptTemplate

load_dotenv(find_dotenv())

OLLAMA_BASE_URL="https://61d7-107-20-19-92.ngrok-free.app"

class PromptService:
    """A service class for generating role play dialogues."""

    def __init__(self, model, user_prompt: str, input_lang: str, output_lang: str, max_words: int):
        """
        Initializes the PromptService.

        Args:
            model (str): The model to be used for dialogue generation.
            user_prompt (str): The user-provided prompt for dialogue generation.
            input_lang (str): The language of the input prompt.
            output_lang (str): The language of the generated dialogue.
            max_words (int): The maximum number of words allowed in each dialogue segment.
        """
        self.model = model 
        self.user_prompt = user_prompt
        self.input_lang = input_lang
        self.output_lang = output_lang
        self.max_words = max_words

    def create_prompt_template(self) -> str: 
        """
        Creates a dialogue prompt template.

        Returns:
            str: The generated dialogue prompt template.
        """
        system_prompt = """ You are an expert at generating role play conversations in {input_lang} \
            Given an input phrase in {input_lang}, you generate a role play conversation in {input_lang}\
            between two participants with the following in JSON format: \

            Background: A short description of the a role play scenario in {input_lang}. Maximum {max_words} words. \
            <Name of First Participant>: Statement made to the second participant in {input_lang}. Maximum {max_words} words\
            <Name of Second participant>: Response to the first participant in {input_lang}, Maximum {max_words} words. \
            """

        phrase = "phrase : {user_prompt}"

        prompt_template = ChatPromptTemplate.from_messages(
            [
                ("system", system_prompt), 
                ("human", phrase)
            ]
        )
        
        return prompt_template
    
    def create_ollama_llm(self):
        """
        Creates an instance of ChatOllama for dialogue generation.

        Returns:
            ChatOllama: The created ChatOllama instance.
        """
        llm = ChatOllama(
            model=self.model,
            base_url=OLLAMA_BASE_URL, 
            format="json", 
            )
        return llm
    
    def create_openai_llm(self):
        """
        Creates an instance of ChatOpenAI for dialogue generation.

        Returns:
            ChatOpenAI: The created ChatOpenAI instance.
        """
        llm = ChatOpenAI(model="gpt-3.5-turbo-0125",
                        temperature=0,
                        max_tokens=50,)
        
        return llm
    
    def create_chain(self): 
        """
        Creates a processing chain for dialogue generation.

        Returns:
            Chain: The processing chain for dialogue generation.
        """
        prompt_template = self.create_prompt_template()
        llm = self.create_openai_llm()
        
        chain = prompt_template | llm | StrOutputParser()
        
        return chain
        
        
def generate_response_from_llm_chain(self):
    """
    Generates a response from the language model chain.

    Returns:
        str: The generated response from the language model chain.
    """
    language_model_chain = self.create_language_model_chain()
    
    response = language_model_chain.invoke({
        "input_language": self.input_language, 
        "user_prompt": self.user_prompt, 
        "max_words": self.max_words
    })
    
    print(response)
    
    return response
    
       
         
        

