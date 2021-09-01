#!/bin/sh
TAG=$1

REGION=$(aws configure get region)
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

aws lambda update-function-code --function-name \
    arn:aws:lambda:${REGION}:${ACCOUNT_ID}:function:floto-note-processor \
    --image-uri ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/floto-note-processor:${TAG}
