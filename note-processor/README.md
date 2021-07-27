# note-processor
Serverless function to enrich and persist received notes

## Build the image
```bash
./build.sh tag
```

## Push the image
```bash
./push.sh tag
```

## Testing
```bash
docker run -p 9000:8080 floto-note-processor
```
```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```
