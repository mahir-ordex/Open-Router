import uvicorn
from fastapi import FastAPI
from dotenv import load_dotenv
load_dotenv()
from utils.db import init_db
from models.user import User
from contextlib import asynccontextmanager
from api import deps

@asynccontextmanager
async def lifespan(app:FastAPI):
    yield init_db()


app = FastAPI(lifespan=lifespan)

app.include_router(deps.routes,prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000,workers=1)
    init_db()
    