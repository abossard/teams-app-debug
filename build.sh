#!/bin/sh
docker buildx build --platform linux/amd64 --push -t $1 .
docker buildx build --platform linux/arm64 --push -t $1 .