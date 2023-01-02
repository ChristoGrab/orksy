"""add reviews table

Revision ID: a62c3416d0d4
Revises: c31e92fefd2c
Create Date: 2022-12-05 15:51:31.039113

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a62c3416d0d4'
down_revision = 'c31e92fefd2c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=255), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('reviewer_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.ForeignKeyConstraint(['reviewer_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    # ### end Alembic commands ###
