# Docker simple 

A simple Node.js app built to understand docker-compose better

## Setup

- Clone this repository
- `cd docker-simple`

## Usage

### To bring the app up using `docker-compose`

```bash
docker-compose up --build

# The application should now be available on localhost:8080
```

### To bring up the app for local development

```bash
# Run the Mongo database instance
docker-compose run mongo

# In a separate terminal window, run:
npm install && npm run dev

# The application should now be available on localhost:8080
```


