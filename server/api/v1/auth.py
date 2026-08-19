import select

from alembic.util import status
from fastapi import APIRouter,Depends
from server.Schema.auth import signupPayload,signinPayload
from server.models.user import User
from server.utils.bcrypt import hashpassword
from utils.db import getDb
from sqlalchemy.orm import Session
from fastapi.Responses import JSONResponse

routes = APIRouter()

@routes.get("/signup")
async def signup(payload:signupPayload,db:Session=Depends(getDb)):
    if not payload.email or not payload.password:
        return JSONResponse(
            status_code=400, 
            content={"detail": "email and password are required"},
         )

    exist = db.scalar(select(User).where(User.email == payload.email))

    if exist:
        return JSONResponse(
            status_code=401,
            content={"detail":"Email Already Exist in the Database!"}
        )
    
    user = User(
        **payload.model_dump(exclude={"password"}),
        password=hashpassword(payload.password),
        role="user",
        provider="email"
        )
    db.add(user)
    db.commit()
    db.refresh(user)

    # JWT
    return JSONResponse(
        status_code=201,
        content={"details":"User Successfull Registered"}
    )