from fastapi import FastAPI

app = FastAPI()

@app.get("/cars/price")
async def cars_by_price(min_price: int = 0, max_price: int = 10000):
    return {"Mensagem": f"Listando os caros com preços entre {min_price} e {max_price}"}