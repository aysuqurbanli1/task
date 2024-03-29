"""empty message

Revision ID: e1b9a944f0fa
Revises: db56df67a548
Create Date: 2022-01-19 23:22:14.730497

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'e1b9a944f0fa'
down_revision = 'db56df67a548'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('card_list',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('information', sa.String(length=500), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('muddet', sa.String(length=255), nullable=True),
    sa.Column('valyuta', sa.String(length=255), nullable=True),
    sa.Column('cashback', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('card_information',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(length=255), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('cardlist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cardlist_id'], ['card_list.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('card')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('card',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('title', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('information', mysql.VARCHAR(length=500), nullable=True),
    sa.Column('image', mysql.VARCHAR(length=500), nullable=True),
    sa.Column('muddet', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('valyuta', mysql.VARCHAR(length=255), nullable=True),
    sa.Column('cashback', mysql.VARCHAR(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='latin1',
    mysql_engine='InnoDB'
    )
    op.drop_table('card_information')
    op.drop_table('card_list')
    # ### end Alembic commands ###
