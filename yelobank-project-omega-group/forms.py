from flask_wtf import FlaskForm
from wtforms import StringField,RadioField,SelectField,TelField
from wtforms.validators import DataRequired


class CardForm(FlaskForm):
    money=RadioField('', choices=[('Manat','Manat'),('Dollar','Dollar'),('Avro','Avro')],validators=[DataRequired()], )
    name=StringField(label='',validators=[DataRequired()], render_kw={"placeholder": "Ad"})
    surname=StringField(label='',validators=[DataRequired()], render_kw={"placeholder": "Soyad"})
    prefiks=SelectField(u'', choices=[('Prefiks', 'Prefiks'), ('050', '050'), ('051', '051'), ('055', '055'),('070', '070'),('077', '077'),('099', '099'),('010', '010')])
    phonenumber = TelField(validators=[DataRequired()],render_kw={"placeholder": "Mobil nömrə"})
    codetext=StringField(label='',validators=[DataRequired()],render_kw={"placeholder": "Kod sözü"})
    filial=SelectField(u'', choices=[('Filialı seç', 'Filialı seç'),('Baş ofis / MXM (20 yanvar m/s)', 'Baş ofis / MXM (20 yanvar m/s)'), ('Filial № 3 (Qış parkı)', 'Filial № 3 (Qış parkı)'), ('Filial № 5 (Sahil m/s)', 'Filial № 5 (Sahil m/s)'),('28 May filialı', '28 May filialı'),('Filial № 11 (Elmlər Akademiyası m/s)', 'Filial № 11 (Elmlər Akademiyası m/s)'),('Filial Nərimanov', 'Filial Nərimanov'),('Filial № 4 (Xalqlar Dostluğu m/s)', 'Filial № 4 (Xalqlar Dostluğu m/s)'),('Mərdəkan filialı', 'Mərdəkan filialı'),('Filial Sədərək TM', 'Filial Sədərək TM'),('Filial Sumqayıt', 'Filial Sumqayıt'),('Filial Gəncə', 'Filial Gəncə'),('Filial Bərdə', 'Filial Bərdə'),('Filial Lənkəran', 'Filial Lənkəran')])
    