from fastapi import FastAPI
from database import SessionLocal, engine
from schemas import PersonSchema
from models import Person, Base


app = FastAPI()


@app.get("/")
def root():
    return {"message": "Hello World"}


@app.get("/person/{person_id}", status_code=200, response_model=PersonSchema)
def get_person(person_id: int):
    with SessionLocal() as db_session:
        person = db_session.query(Person).get(1)
        return person
