#!/bin/sh
TAG=$1

REGION=$(aws configure get region)
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

docker tag floto-note-processor:$TAG $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/floto-note-processor:$TAG
docker push $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/floto-note-processor:$TAG
