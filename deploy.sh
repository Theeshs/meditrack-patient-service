echo "enabled minicube docker env"
eval $(minikube docker-env)

echo "building new docker image"
docker build -t patient-service-api .

echo "appliyng deployment yml"
kubectl apply -f deployment.yaml

echo "removing unused docker containers"
docker container prune -f

echo "removing unused docker images"
docker image prune -f

echo "forwarding port"