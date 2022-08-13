"""empty message

Revision ID: b4c63b8ec859
Revises: 1671e037ccb3
Create Date: 2022-01-20 10:39:50.246225

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b4c63b8ec859'
down_revision = '1671e037ccb3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cardabout', 'title3',
               existing_type=mysql.VARCHAR(length=500),
               type_=sa.LargeBinary(length=2048),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cardabout', 'title3',
               existing_type=sa.LargeBinary(length=2048),
               type_=mysql.VARCHAR(length=500),
               existing_nullable=True)
    # ### end Alembic commands ###