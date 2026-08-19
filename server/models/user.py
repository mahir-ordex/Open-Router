import uuid
from utils.db import Base
from sqlalchemy import UUID, Column, DateTime,String,func




class User(Base):
    __tablename__="users"
    id = Column(UUID(as_uuid=True),primary_key=True, default=uuid.uuid4())
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False, default="user")
    provider = Column(String, nullable=False, default="email")  # email | google | github
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
