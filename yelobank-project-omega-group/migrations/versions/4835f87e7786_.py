"""empty message

Revision ID: 4835f87e7786
Revises: 1a9786a829f7
Create Date: 2022-01-20 00:44:30.724313

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4835f87e7786'
down_revision = '1a9786a829f7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('information',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(length=255), nullable=True),
    sa.Column('image', sa.String(length=500), nullable=True),
    sa.Column('color', sa.String(length=255), nullable=True),
    sa.Column('cardlist_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['cardlist_id'], ['card_list.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('information')
    # ### end Alembic commands ###