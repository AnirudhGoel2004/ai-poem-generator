# AI Poem Generator

The **AI Poem Generator** is a web app that creates personalized poems based on mood, theme, and length using AI.

## Features

- Generate poems with custom moods (e.g., happy, sad, romantic).
- Input themes like nature, love, or technology.
- Choose poem lengths: short, medium, or long.

## Tech Stack

- **Backend**: Flask, Python, Hugging Face Transformers
- **Frontend**: React.js

## Setup

### Backend

1. Navigate to `backend/`:
   ```bash
   cd backend
   pip install -r requirements.txt
   python3 app.py
   ```
2. Backend runs at `http://127.0.0.1:5000`.

### Frontend

1. Navigate to `frontend/`:
   ```bash
   cd frontend
   npm install
   npm start
   ```
2. Frontend runs at `http://localhost:3000`.

## Usage

1. Start both servers.
2. Open `http://localhost:3000`.
3. Select mood, theme, and length, then click **Generate Poem**.

## Future Enhancements

- Add more moods and themes.
- Save and share generated poems.
- Enhance with voice input.

## License

This project is licensed under the MIT License.
