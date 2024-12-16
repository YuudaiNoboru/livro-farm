from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_cars():
    return {"mensagem": "Todos os carros aqui."}