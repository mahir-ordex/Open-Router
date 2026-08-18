from datetime import datetime,timezone
import uuid

from passlib.handlers import bcrypt
from utils.db import Base
from sqlalchemy import Column, DateTime,String,UUID,Integer, null




class User(Base):
    __tablename__="users"
    id = Column(UUID(as_uuid=True),primary_key=True, default=uuid.uuid.uuid4)
    name=Column(String,nullable=True)
    email=Column(String,nullable=False)
    password=  Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=datetime.now(), nullable=False)


