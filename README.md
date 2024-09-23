# Precis AI

## Project Summary

**Precis AI** is a social media marketing automation platform that leverages AI/ML to enhance engagement and streamline post generation across multiple social media platforms. The application allows users to input text, which is then summarized, and social media posts are generated from the summarization. This content can be directly posted and scheduled on platforms like Twitter, LinkedIn, Reddit, Facebook, and Instagram—all from a single interface. 

The project combines artificial intelligence with practical marketing tools, creating a new approach to social media marketing by automating the creation of relevant content that improves outreach and engagement.

### Key Features:
- Summarization of user-provided text into concise briefs.
- AI-generated social media posts based on the summarized content.
- Integration with multiple social platforms for direct posting and scheduling.
- Image generation for posts using DALL-E 3.
- Video and audio transcription using OpenAI Whisper.

## My Contributions

### Backend Server Deployment
- **Node.js & Express.js:** Developed and deployed the backend server for handling requests.
- **AWS Deployment:** Deployed the backend on AWS EC2 instances, utilizing auto-scaling and load balancing for high availability.

### Backend AI Integrations
- **DALL-E 3:** Created API endpoints for generating images relevant to AI-generated posts.
- **OpenAI Whisper:** Integrated Whisper for transcribing audio/video files to text and set up backend support for file uploads.
- **Custom Models:** Fine-tuned GPT-3.5 to optimize post generation, based on data collected from Twitter brand accounts.

### LinkedIn API Integration
- **OAuth Authentication:** Implemented LinkedIn OAuth to enable seamless login and authentication.
- **Media Uploads & Posting:** Developed functionality for uploading media and scheduling posts directly to LinkedIn using the API.
