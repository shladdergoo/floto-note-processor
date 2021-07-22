package main

import (
	"fmt"
	"time"

	"github.com/aws/aws-lambda-go/lambda"
)

type NoteEvent struct {
	NoteText    string
	HasLocation bool
	Latitude    float64
	Longitude   float64
	NoteDate    time.Time
}

func HandleLambdaEvent(event NoteEvent) error {

	fmt.Println("Woot!!")

	return nil
}

func main() {
	lambda.Start(HandleLambdaEvent)
}
