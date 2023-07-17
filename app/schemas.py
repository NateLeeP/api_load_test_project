from pydantic import BaseModel


class PersonSchema(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True


class PersonCreate(BaseModel):
    name: str
