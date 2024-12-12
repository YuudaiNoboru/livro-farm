from pydantic import BaseModel, Field, ConfigDict, EmailStr

class UserModel(BaseModel):
    id: int = Field()
    username: str = Field(min_length=5, max_length=20, alias="name")
    email: EmailStr = Field()
    password: str = Field(min_length=5, max_digits=20, pattern="^[a-zA-Z0-9]+$")
    model_config = ConfigDict(extra="forbid", populate_by_name=True)