import os
from sqlalchemy import select
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, Request
from jose import jwt, JWTError
from Schema.JWT import JWTPayload
from models.user import User
from utils.db import getDb

async def generate_jwt_token(payload: JWTPayload):
    if not payload.role or not payload.id:
        raise HTTPException(
            status_code=400, 
            detail="Role and User ID are Required!")
    return jwt.encode({"id":str(payload.id),"role":payload.role},os.environ["JWT_SECRET_KEY"],algorithm="HS256")


async def verify_jwt_token(req: Request, db: Session = Depends(getDb)):
    token = req.cookies.get("token")
    if not token:
        authorization = req.headers.get("Authorization")
        if authorization:
            token = authorization.split(" ", 1)[-1].strip()

    if not token:
        raise HTTPException(
            status_code=401,
            detail="Authorization header is missing",
        )

    try:
        payload = jwt.decode(
            token,
            os.environ["JWT_SECRET_KEY"],
            algorithms=["HS256"],
        )
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    user = db.scalar(select(User).where(User.id == payload["id"]))

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User Not Found!",
        )

    return {
        "id": str(user.id),
        "email": user.email,
        "role": user.role,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "provider": user.provider,
    }





