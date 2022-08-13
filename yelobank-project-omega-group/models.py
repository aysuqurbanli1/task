from dataclasses import dataclass
from datetime import date
from sys import prefix
from unicodedata import name
from extensions import db
from app import app

# class CardTitle(db.Model):
#         id=db.Column(db.Integer,primary_key=True)
#         title=db.Column(db.String(200), nullable=True)
#         image=db.Column(db.String(500),nullable=True)

#         def __repr__(self):
#             return self.title,self.image
#         def __init__(self, title, image):
#             self.title=title
#             self.image=image

#         def save(self):
#             db.session.add(self)
#             db.session.commit()



class Information(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    text=db.Column(db.String(255), nullable=True)
    image=db.Column(db.String(500),nullable=True)
    color=db.Column(db.String(255), nullable=True)
    cardlist_id=db.Column(db.Integer, db.ForeignKey("card_list.id"), nullable=False)

    def __repr__(self):
            return self.text,self.image,self.color,self.cardlist_id

    def __init__(self,text,image,color,cardlist_id):
            self.text=text
            self.image=image
            self.color=color
            self.cardlist_id=cardlist_id

    def save(self):
            db.session.add(self)
            db.session.commit()



class CardList(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(255), nullable=True)
    information=db.Column(db.String(500),nullable=True)
    image=db.Column(db.String(500),nullable=True)
    muddet=db.Column(db.String(255), nullable=True)
    valyuta=db.Column(db.String(255), nullable=True)
    cashback=db.Column(db.String(255), nullable=True)
    color=db.Column(db.String(255), nullable=True)

    def __repr__(self):
            return  self.title,self.information,self.image,self.muddet,self.valyuta,self.cashback,self.color

    def __init__(self,title,information, image,muddet,valyuta,cashback,color):
            self.title=title
            self.information=information
            self.image=image
            self.muddet=muddet
            self.valyuta=valyuta
            self.cashback=cashback
            self.color=color


    def save(self):
            db.session.add(self)
            db.session.commit()
    

class Cardform(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    money=db.Column(db.String(255), nullable=True)
    name=db.Column(db.String(500),nullable=True)
    surname=db.Column(db.String(500),nullable=True)
    prefiks=db.Column(db.String(30), nullable=True)
    phonenumber=db.Column(db.String(30), nullable=True)
    codetext=db.Column(db.String(255), nullable=True)
    filial=db.Column(db.String(255), nullable=True)
    
    def __repr__(self):
            return  self.money,self.name,self.surname,self.prefiks,self.phonenumber,self.codetext,self.filial

    def __init__(self,money,name, surname,prefiks,phonenumber,codetext,filial):
            self.money=money
            self.name=name
            self.surname=surname
            self.prefiks=prefiks
            self.phonenumber=phonenumber
            self.codetext=codetext
            self.filial=filial


    def save(self):
            db.session.add(self)
            db.session.commit()

class Cardabout(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title1=db.Column(db.String(255), nullable=False)
    text1=db.Column(db.String(255), nullable=False)
    title2=db.Column(db.String(255), nullable=False)
    title3=db.Column(db.String(2048), nullable=False)
    title4=db.Column(db.String(255), nullable=False)
    card_id=db.Column(db.Integer, db.ForeignKey("card_list.id"), nullable=False)

    def __repr__(self):
            return self.title1,self.text1,self.title2,self.title3,self.title4,self.card_id

    def __init__(self,title1,text1,title2,title3,title4,card_id):
            self.title1=title1
            self.text1=text1
            self.title2=title2
            self.title3=title3
            self.title4=title4
            self.card_id=card_id

    def save(self):
            db.session.add(self)
            db.session.commit()




class EmanetlerList(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(255), nullable=True)
    information=db.Column(db.String(500),nullable=True)
    image=db.Column(db.String(500),nullable=True)
    mebleg=db.Column(db.String(255), nullable=True)
    muddet=db.Column(db.String(255), nullable=True)
    odenis=db.Column(db.String(255), nullable=True)

    def __repr__(self):
            return self.title,self.information,self.image,self.mebleg,self.muddet,self.odenis

    def __init__(self, title,information, image,mebleg,muddet,odenis):
            self.title=title
            self.information=information
            self.image=image
            self.mebleg=mebleg
            self.muddet=muddet
            self.odenis=odenis


    def save(self):
            db.session.add(self)
            db.session.commit()


