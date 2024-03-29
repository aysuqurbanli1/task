"""empty message

Revision ID: d0908df51647
Revises: 5d81f5e13ddf
Create Date: 2022-01-16 18:57:14.411163

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd0908df51647'
down_revision = '5d81f5e13ddf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('emanetler_list',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('information', sa.String(length=500), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('mebleg', sa.String(length=255), nullable=True),
    sa.Column('muddet', sa.String(length=255), nullable=True),
    sa.Column('odenis', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('emanetler_list')
    # ### end Alembic commands ###
