from pydantic import BaseModel, EmailStr, ValidationError, model_validator
from typing import Any, Self

class UserModelV(BaseModel):
    id: int
    username: str
    email: EmailStr
    password1: str
    password2: str

    @model_validator(mode='after')
    def check_password(self) -> Self:
        pw1 = self.password1
        pw2 = self.password2
        if pw1 is not None and pw2 is not None and pw1 != pw2:
            raise ValueError('passwords do not match')
        return self
    
    @classmethod
    def check_private_data(cls, data: Any) -> Any:
        if isinstance(data, dict):
            assert ('private_data' not in data), 'Private data should not be include'
        return data