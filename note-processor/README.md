# note-processor
Serverless function to enrich and persist received notes

## Build the image
```bash
./ci/build.sh tag
```

## Push the image
```bash
./ci/push.sh tag
```

## Testing
```bash
docker run -p 9000:8080 floto-note-processor
```
```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d \
    '{ "noteText":"foo", "hasLocation":"true", "latitude":"1.2345", "longitude":"1.2345", "noteDate":"2021-7-29 14:04:05" }'
```
