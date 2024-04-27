from openai import OpenAI
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

import argparse

MAX_PROMPT_LENGTH = 10
def main():
    
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", "-i", type=str, required=True)
    args = parser.parse_args()
    
    user_prompt = args.prompt
    
    if validate_prompt(user_prompt):
        
        dialogue = generate_dialogue(user_prompt=user_prompt)
        print(f"Dialogue - {dialogue}")
    
    else: 
        raise ValueError(f"""Input too long. Length of input = {len(user_prompt)}. Number of words must be less that {MAX_PROMPT_LENGTH}""")
    

def generate_dialogue(user_prompt: str) -> str:
    client = OpenAI()

    print(f"User prompt - {user_prompt}")
    content = f"Translate the {user_prompt} to German and create a sentence using the translated word"
    print(f"System prompt - {content}")
    
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a language teacher, you translate words from english to german can create a sentence"},
        {"role": "user", "content": content}
    ], 
    max_tokens=20,
    )

    dialogue = completion.choices[0].message.content
    
    # Remove white spaces at the need of the output
    dialogue = dialogue.strip()
    
    # Since the number of token is controlled the last word may not be a valid end of a sentence 
    # Check if the end of the sentence is valid 
    
    # Get the last charater 
    last_char = dialogue[-1]
    
    # Show the user that the sentence is not complete
    if last_char not in [".", "!", "?"]:
        
        # Append ... to the end of the sentence 
        dialogue += "..."
    
    return dialogue

def validate_prompt(prompt: str) -> bool: 
    
    # Check if the length of prompt is more the max prompt length
    return len(prompt) <= MAX_PROMPT_LENGTH
        
    
    
if __name__ == "__main__":
    main()