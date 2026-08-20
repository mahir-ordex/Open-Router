from pydantic import BaseModel, EmailStr

class signupPayload(BaseModel):
    first_name:str | None = None
    last_name:str | None = None
    email:EmailStr | None = None
    password:str

class signinPayload(BaseModel):
    email:EmailStr
    password:str
