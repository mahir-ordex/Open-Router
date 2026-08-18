import pwd
from warnings import deprecated
from passlib.handlers import CryptContext

pwd_context = CryptContext(schemas=["bcrypt"],deprecated="auto")

def hashpassword(password:str) -> str:
    return pwd_context.hash(password)

def vefiry_password(plain_password :str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password,hashed_password)