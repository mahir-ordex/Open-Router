import os
from sqlalchemy import select
from sqlalchemy.sql.coercions import expect
from fastapi import JSONResponse, Request
from jose import jwt
from server.Schema.JWT import JWTPayload
from server.models.user import User
from server.utils.db import getDb

async def generate_jwt_token(payload: JWTPayload):
    if not payload.role or not payload.id:
        raise JSONResponse(
            status_code=400,
            detail="id and role are required",
        )
    return jwt.encode({"id":payload.id,"role":payload.role},os.environ["JWT_SECRET_KEY"],algorithm="HS256")


async def verify_jwt_token(req:Request):
        db = await getDb()
        authorization = req.headers.get("Authorization")
        if not authorization:
            raise JSONResponse(
                status_code=401,
                contant={"details":"Authorization header is missing"}
            )
        token = authorization.split(" ",1)[1].strip()

        dcryption = jwt.decode(token,os.environ["JWT_SECRET_KEY"],algorithm=["HS256"])

        user = db.scalar(select(User).where(User.id == dcryption.id))

        if not user:
            raise JSONResponse(status_code=404,content={"details":"User Not Found!"})

        return {
            "id": str(user.id),
            "email": user.email,
            "role": user.role,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "provider": user.provider,
        }




