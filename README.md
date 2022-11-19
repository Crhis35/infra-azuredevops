# DevOps Project

```sh
docker build -t dockeragent . --platform=linux/amd64 

docker run -e AZP_URL=<Azure DevOps instance> -e AZP_TOKEN=<PAT token> -e AZP_AGENT_NAME=mydockeragent -v /var/run/docker.sock:/var/run/docker.sock --privileged dockeragent

```
