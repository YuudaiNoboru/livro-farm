from fastapi import FastAPI
from routers import cars
from routers import users
    
app = FastAPI()

app.include_router(cars.router, prefix="/cars", tags=["cars"])
app.include_router(users.router, prefix="/users", tags=["users"])