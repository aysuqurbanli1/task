from flask import Flask  
from flask_admin import Admin   #adminpanel
from flask_admin.contrib.sqla import ModelView  # adminpanel

app= Flask(__name__)

app=Flask(__name__,template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:123456@127.0.0.1:3306/yelobank_cards'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
app.config['SECRET_KEY']='my_project'

# from controllers import app
from controllers import *
# from extensions import migrate, db
from extensions import migrate, db
from models import *

admin=Admin(app)
admin.add_view(ModelView(CardList,db.session))
admin.add_view(ModelView(Information,db.session))
admin.add_view(ModelView(Cardform,db.session))
admin.add_view(ModelView(Cardabout,db.session))
admin.add_view(ModelView(EmanetlerList,db.session))
 #adminpanel

if __name__=='__main__':
        # migrate.init_app(app)/
        app.init_app(db)
        app.init_app(migrate)
        
        app.run(port=5000,debug=True)
        # app.run()
