from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"mensagem": "Olá, Mundo!"}

@app.post("/")
async def post_root():
    return {"mensagem": "Post realizado com sucesso!"}