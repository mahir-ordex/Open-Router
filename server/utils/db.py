import os
from sqlalchemy import create_engine, engine, true
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import declarative_base, sessionmaker

from dotenv import load_dotenv
from sqlalchemy.util import FastIntFlag

load_dotenv();

DB_URL = os.environ["DB_URL"]
engine = create_engine(DB_URL)

SessionLocal = sessionmaker(autocommit=False,autoflush=False, bind=engine)
Base = declarative_base()

def init_db():
    Base.metadata.create_all(bind=engine, checkfirst=True)
    print("Database initialized successfully")

def getDb():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()
