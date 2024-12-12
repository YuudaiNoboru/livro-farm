from pydantic import BaseModel
from typing import Literal

class UserModel(BaseModel):
    id: int
    username: str
    email: str
    account: Literal["personal", "business"] | None = None
    nickname: str | None = None

print(UserModel.model_fields)