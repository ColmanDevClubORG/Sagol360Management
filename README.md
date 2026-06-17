🐋 Docker Deployment - Sagol 360

1. Build
   `docker build -t sagol360 .`
2. Run
   `docker run -d -p 8080:80 --name sagol360-container sagol360`
3. Access
   URL: http://localhost:3000

🛠️ Commands
Stop: docker stop sagol360-container

Logs: docker logs -f sagol360-container

Clean: docker rm -f sagol360-container
🐋

## Environment Variables

This project uses environment variables for the API base URL and email recipients.

Create a `.env` file in the project root based on `.env.example`:

`cp .env.example .env`

On Windows PowerShell:

`Copy-Item .env.example .env`

The `.env` file should contain:

`VITE_API_BASE_URL=http://localhost:3000`

`VITE_ATTENDANCE_EMAIL=example@gmail.com`

`VITE_API_BASE_URL` is used by the frontend API service as the base URL for backend requests.

`VITE_ATTENDANCE_EMAIL` is used as the recipient for attendance update emails.

The `.env` file is ignored by Git and should not be committed.
Only `.env.example` should be committed, so other developers know which environment variables are required.
