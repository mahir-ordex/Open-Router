import uvicorn
from fastapi import FastAPI
from utils.db import init_db

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000,workers=1)
    engine = init_db()
    print(engine)