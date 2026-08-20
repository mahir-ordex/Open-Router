from .v1 import auth
from fastapi import APIRouter


routes = APIRouter(
    prefix="/v1"
)
routes.include_router(auth.routes,prefix="/auth",tags=["Authentication"])
# routes.include_router(users.routes,prefix="/user",tags=["User"])