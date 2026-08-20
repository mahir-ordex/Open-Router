from fastapi import APIRouter, Depends, Response
from fastapi.responses import JSONResponse
from sqlalchemy import select
from sqlalchemy.orm import Session
from Schema.auth import signupPayload, signinPayload
from models.user import User
from services.JWT import generate_jwt_token, verify_jwt_token
from utils.bcrypt import hashpassword, verify_password
from utils.db import getDb

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
            content={"detail":"User Not Found!"}
        )
    isPasswordTrue = verify_password(payload.password, user.password)

    if not isPasswordTrue:
        return JSONResponse(
            status_code=400,
            content={"detail":"Invalid Password!"}
        )
    token = await generate_jwt_token(user)    

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

@routes.get("/logout")
async def logout(res:Response,db:Session=Depends(getDb)):
    res = JSONResponse(
        status_code=200,
        content={"detail":"User Logout Successfully!"}
    )
    res.delete_cookie(key="token",path="/")
    return res
