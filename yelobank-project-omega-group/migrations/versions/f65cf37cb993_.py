"""empty message

Revision ID: f65cf37cb993
Revises: 5d1385948e11
Create Date: 2022-01-15 19:46:28.174793

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f65cf37cb993'
down_revision = '5d1385948e11'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('card_list',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('information', sa.String(length=255), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('muddet', sa.String(length=255), nullable=True),
    sa.Column('valyuta', sa.String(length=255), nullable=True),
    sa.Column('cashback', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('card_list')
    # ### end Alembic commands ###
