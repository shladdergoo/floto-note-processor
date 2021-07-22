#!/bin/sh
TAG=$1

docker build -t floto-note-processor:$TAG .
