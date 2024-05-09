from prompt.prompt_service import PromptService


prompt_service = PromptService(
    mdoel="llama3", 
    input_lang="english", 
    output_lang="german",
    max_words=20
)

dialogue_prompt = prompt_service.create_dialogue_prompt()
print(dialogue_prompt)