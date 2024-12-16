from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_users():
    return {"mensagem": "Todos os usuários aqui."}