🐋 Docker Deployment - Sagol 360

1. Build
   Bash
   docker build -t sagol360 .
2. Run
   Bash
   docker run -d -p 8080:80 --name sagol360-container sagol360
3. Access
   URL: http://localhost:8080

🛠️ Commands
Stop: docker stop sagol360-container

Logs: docker logs -f sagol360-container

Clean: docker rm -f sagol360-container
🐋
