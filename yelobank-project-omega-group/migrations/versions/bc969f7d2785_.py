"""empty message

Revision ID: bc969f7d2785
Revises: 95059da6ba05
Create Date: 2022-01-15 20:13:40.721979

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'bc969f7d2785'
down_revision = '95059da6ba05'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('card_list', 'information',
               existing_type=mysql.TEXT(),
               type_=sa.String(length=500),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('card_list', 'information',
               existing_type=sa.String(length=500),
               type_=mysql.TEXT(),
               existing_nullable=True)
    # ### end Alembic commands ###
