# UCR AI Advisor

UCR AI Advisor is a full-stack AI assistant designed to help UC Riverside students ask questions about classes, majors, and campus life.

The application sends user questions to an OpenAI model, returns a concise AI-generated response, and stores the question, response, and timestamp in a PostgreSQL database.

## Features

- AI-powered academic question answering
- OpenAI API integration
- PostgreSQL database storage
- Persistent history of recent questions and answers
- Node.js and Express backend
- Simple HTML, CSS, and JavaScript frontend

## Tech Stack

- JavaScript
- Node.js
- Express
- PostgreSQL
- OpenAI API
- HTML
- CSS

## How It Works

1. A user submits a question through the web interface.
2. The Node.js backend sends the question to the OpenAI API.
3. The model generates a response using instructions tailored to academic support.
4. The question and AI response are stored in PostgreSQL.
5. Recent questions and answers are retrieved and displayed in the application.

## Project Purpose

I built this project to gain hands-on experience integrating an LLM into a full-stack application. Through the project, I worked with API integration, backend routing, relational databases, prompt design, debugging, and persistent storage of model outputs.

## Running Locally

Install dependencies:

`npm install`

Set the required environment variables:

`OPENAI_API_KEY`  
`DATABASE_URL`

Then start the application:

`node server.js`
