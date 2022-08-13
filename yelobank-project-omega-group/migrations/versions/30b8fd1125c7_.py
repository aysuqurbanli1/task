"""empty message

Revision ID: 30b8fd1125c7
Revises: 4835f87e7786
Create Date: 2022-01-20 02:16:19.672464

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30b8fd1125c7'
down_revision = '4835f87e7786'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cards',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('information', sa.String(length=500), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('muddet', sa.String(length=255), nullable=True),
    sa.Column('valyuta', sa.String(length=255), nullable=True),
    sa.Column('cashback', sa.String(length=255), nullable=True),
    sa.Column('color', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.add_column('card_list', sa.Column('color', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('card_list', 'color')
    op.drop_table('cards')
    # ### end Alembic commands ###
