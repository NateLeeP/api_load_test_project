from database import Base, engine
from sqlalchemy import Column, Integer, String, Table


class Person(Base):
    __table__ = Table("person", Base.metadata, autoload=True, autoload_with=engine)

    id: Column("id", Integer, primary_key=True)
    name: Column("name", String(50))
