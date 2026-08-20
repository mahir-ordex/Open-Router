import select

from alembic.util import status
from sqlalchemy import Boolean
from fastapi import APIRouter,Depends
from server.Schema.auth import signupPayload,signinPayload
from server.models.user import User
from server.services.JWT import generate_jwt_token
from server.utils.bcrypt import hashpassword
from utils.db import getDb
from sqlalchemy.orm import Session
from fastapi.Responses import JSONResponse
from fastapi import Response

routes = APIRouter()

@routes.post("/signup")
async def signup(res:Response, payload:signupPayload,db:Session=Depends(getDb)):
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

    token = await generate_jwt_token(user)

    res = JSONResponse(
        status_code=201,
        content={"detail":"User successfully registered"}
    )
    res.set_cookie(
        key="token",
        value=token,
        max_age=60*60*24*7,
        path="/"
    )

    return res

@routes.post("/signin")
async def signin(res:Response,payload:signinPayload,db:Session=Depends(getDb)):
    if not payload.email or not payload.password:
        return JSONResponse(
            status_code=400,
            content={"detail":"Email and Password Both are Required!"}
        )
    user = db.scalar(select(User).where(User.email == payload.email))

    if not user:
        return JSONResponse(
            status_code=400,
            contents={"details":"User Not Found!"}
        )
    isPasswordTrue = await(payload.password,user.password)

    if not isPasswordTrue or isPasswordTrue == false:
        return JSONResponse(
            status_code=400,
            content={"detail":"Enter Valid Password!"}
        )
    token = generate_jwt_token(user)    

    res = JSONResponse(
        status_code=201,
        content={"detail":"User successfully Login"}
    )

    res.set_cookie(
        key="token",
        value=token,
        max_age=60*60*24*7,
        path="/",
    )

    return res