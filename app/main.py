from fastapi import FastAPI
from database import SessionLocal, engine
from schemas import PersonSchema, PersonCreate
from models import Person, Base
from typing import List


app = FastAPI()


@app.get("/")
def root():
    return {"message": "Hello World"}


@app.get("/person/{person_id}", status_code=200, response_model=PersonSchema)
async def get_person(person_id: int):
    with SessionLocal() as db_session:
        person = db_session.query(Person).get(person_id)
        return person


@app.get("/person", status_code=200, response_model=List[PersonSchema])
async def get_all_person():
    with SessionLocal() as db_session:
        persons = db_session.query(Person).all()
        return persons


@app.post("/person", status_code=201, response_model=PersonSchema)
def create_person(request: PersonCreate):
    with SessionLocal() as db_session:
        created_person = Person(name=request.name)
        db_session.add(created_person)
        db_session.commit()
        db_session.refresh(created_person)

        return created_person
