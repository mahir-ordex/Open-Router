from pydantic import BaseModel

class JWTPayload(BaseModel):
    id:str
    role:str