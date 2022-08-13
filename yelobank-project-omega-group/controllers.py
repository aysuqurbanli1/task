from crypt import methods
from urllib import request
from flask import Flask, render_template,request
from app import app
from forms import CardForm
from models import *

# @app.route("/cards/yelo-kart-debet/")
# def cardid():
#     id=1
#     card1 = CardTitle.query.get(id)
#     return render_template("kartlaretraflisehifesi.html",kart1=card1)

@app.route("/cards/")
def cards():
    csslink= "../static/kartlarsehifesi.css"
    jslink="../static/kartlarsehifesi.js"
    kart=CardList.query.all()
    return render_template("kartlarsehifesi.html", data=kart,csslink=csslink,jslink=jslink)
    
    

@app.route("/cards/<int:id>/",methods=['GET','POST'])
def cardid(id): 
        post_data=request.form
        print(post_data)
        form=CardForm()
        if request.method=="POST":
            form=CardForm(data=post_data)
            if form.validate_on_submit():
                cardorder=Cardform(money=form.money.data,name=form.name.data,surname=form.surname.data,prefiks=form.prefiks.data,phonenumber=form.phonenumber.data,codetext=form.codetext.data,filial=form.filial.data)
                cardorder.save()
        cardid=CardList.query.get(id)
        informationid=Information.query.filter(Information.cardlist_id==id)
        aboutcard=Cardabout.query.filter(Cardabout.card_id==id)
        
        return render_template("kartlaretraflisehifesi.html",data2=cardid,infdata=informationid,form=form,about=aboutcard)

# @app.route("/cards/yelo-kart-platinum/")
# def cardplatinum():
#     id=2
#     kart2=CardList.query.get(id)
#     return render_template("kartlaretraflisehifesi.html", data2=kart2)

# @app.route("/cards/yelo-kart-debet/")
# def carddebet():
#     id=1
#     kart2=CardList.query.get(id)
#     return render_template("kartlaretraflisehifesi.html", data2=kart2)

@app.route("/deposits/")
def deposit():
    csslink= "../static/emanetler.css"
    jslink="../static/emanetler.js"
    # id1=1
    # id2=2
    # id3=3
    kart3=EmanetlerList.query.all()
    # kart3=EmanetlerList.query.get(id1)
    # kart4=EmanetlerList.query.get(id2)
    # kart5=EmanetlerList.query.get(id3)
    return render_template("emanetler.html",emanet=kart3,csslink=csslink,jslink=jslink)

