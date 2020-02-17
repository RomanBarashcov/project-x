#!/usr/bin/env bash

imageName=project-x-back
cd "$(dirname "$0")"

case $1 in
  "local") buildMode="local-deploy" ;;
  "dev") buildMode="dev-deploy" ;;
  "stage") buildMode="stage-deploy";;
esac

docker rmi $imageName
docker build --build-arg MODE=$buildMode -t $imageName .