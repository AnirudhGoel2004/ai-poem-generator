from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load a public Hugging Face model
poem_generator = pipeline("text-generation", model="gpt2")

@app.route("/generate_poem", methods=["POST"])
def generate_poem():
    data = request.json
    mood = data.get("mood", "neutral")
    theme = data.get("theme", "life")
    length = data.get("length", "short")
    
    # Customize prompt
    prompt = f"Write a {length} poem in a {mood} mood about {theme}:"
    result = poem_generator(prompt, max_length=100, num_return_sequences=1)

    return jsonify({"poem": result[0]["generated_text"]})

if __name__ == "__main__":
    app.run(debug=True)
