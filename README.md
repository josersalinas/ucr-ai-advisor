# UCR AI Advisor

UCR AI Advisor is a full-stack application designed to help UC Riverside students ask questions about classes, majors, and campus life.

The application connects a web interface, backend application logic, the OpenAI API, and a PostgreSQL database to process user questions, generate responses, and store structured interaction records.

<p align="center">
  <img src="https://github.com/user-attachments/assets/57cdb8db-decb-4f0e-af8f-0e4ebc6ffae5" width="50%" alt="UCR AI Advisor question interface">
  <img src="https://github.com/user-attachments/assets/7208396b-d4b6-47c0-8a11-fe017c588725" width="45%" alt="UCR AI Advisor response example">
</p>

## Live Demo

Try the app here: https://ucr-ai-advisor.onrender.com

## Features

- Processes student questions through a full-stack application workflow
- Integrates the OpenAI API for response generation
- Stores questions, responses, and timestamps in PostgreSQL
- Maintains a persistent history of recent interactions
- Uses Node.js and Express for backend routing and application logic
- Provides a simple HTML, CSS, and JavaScript frontend

## Tech Stack

- JavaScript
- Node.js
- Express
- PostgreSQL
- REST APIs
- OpenAI API
- HTML
- CSS

## How It Works

1. A user submits a question through the web interface.
2. The Node.js backend receives and processes the request.
3. The application sends the question to the OpenAI API.
4. The generated response is returned to the application.
5. The question, response, and timestamp are stored in PostgreSQL.
6. Stored records can be retrieved and displayed through the application.

## System Workflow

The project was designed as a connected workflow between the user interface, backend logic, external API, and relational database.

**User Input → Backend Processing → API Request → Response Handling → Database Storage → Retrieval**

Building this workflow required coordinating several parts of the system so that data moved accurately and consistently between each layer.

## Project Purpose

I built this project to strengthen my experience with full-stack application development, relational databases, API integration, and structured data workflows.

Throughout the project, I worked on backend routing, database design, response handling, debugging, and troubleshooting issues across different parts of the application.

The project also gave me hands-on experience thinking about how individual system components work together and how problems in one part of a workflow can affect the overall user experience.

## Running Locally

Install dependencies:

`npm install`

Set the required environment variables:

`OPENAI_API_KEY`  
`DATABASE_URL`

Then start the application:

`node server.js`
