"""empty message

Revision ID: 5d81f5e13ddf
Revises: 1194e8961bd9
Create Date: 2022-01-16 17:50:37.018045

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5d81f5e13ddf'
down_revision = '1194e8961bd9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('card_list', 'information',
               existing_type=sa.BLOB(),
               type_=sa.String(length=500),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('card_list', 'information',
               existing_type=sa.String(length=500),
               type_=sa.BLOB(),
               existing_nullable=True)
    # ### end Alembic commands ###
