from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, status

app = FastAPI()

class InsertCar(BaseModel):
    brand: str
    model: str
    year: int

@app.post("/carsmodel")
async def new_car_model(car: InsertCar):
    if car.year > 2026:
        raise HTTPException(status.HTTP_406_NOT_ACCEPTABLE, detail="O ano desse carro não existe.")
    return {"mensagem": car}