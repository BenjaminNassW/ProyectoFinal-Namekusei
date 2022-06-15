"""empty message

Revision ID: 934099dfa8e2
Revises: d190ca8013ed
Create Date: 2022-05-12 23:14:31.640959

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '934099dfa8e2'
down_revision = 'd190ca8013ed'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('client',
    sa.Column('client_id', sa.Integer(), nullable=False),
    sa.Column('client_mail', sa.String(length=120), nullable=True),
    sa.Column('client_name', sa.String(length=120), nullable=True),
    sa.Column('client_lastname', sa.String(length=120), nullable=True),
    sa.Column('client_phone', sa.Integer(), nullable=True),
    sa.Column('client_rut', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('client_id'),
    sa.UniqueConstraint('client_mail'),
    sa.UniqueConstraint('client_rut')
    )
    op.create_table('region',
    sa.Column('region_id', sa.Integer(), nullable=False),
    sa.Column('region_name', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('region_id')
    )
    op.create_table('comuna',
    sa.Column('comuna_id', sa.Integer(), nullable=False),
    sa.Column('region_id', sa.Integer(), nullable=True),
    sa.Column('comuna_name', sa.String(length=50), nullable=True),
    sa.ForeignKeyConstraint(['region_id'], ['region.region_id'], ),
    sa.PrimaryKeyConstraint('comuna_id')
    )
    op.create_table('schedule',
    sa.Column('schedule_id', sa.Integer(), nullable=False),
    sa.Column('specialist_id', sa.Integer(), nullable=True),
    sa.Column('time_start', sa.Integer(), nullable=True),
    sa.Column('time_end', sa.Integer(), nullable=True),
    sa.Column('day', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['specialist_id'], ['specialist.specialist_id'], ),
    sa.PrimaryKeyConstraint('schedule_id'),
    sa.UniqueConstraint('day')
    )
    op.create_table('reservation',
    sa.Column('reservation_id', sa.Integer(), nullable=False),
    sa.Column('specialist_id', sa.Integer(), nullable=True),
    sa.Column('client_mail', sa.String(), nullable=True),
    sa.Column('schedule_id', sa.Integer(), nullable=True),
    sa.Column('reservation_type', sa.Integer(), nullable=True),
    sa.Column('reservation_comment', sa.String(length=200), nullable=True),
    sa.ForeignKeyConstraint(['client_mail'], ['client.client_mail'], ),
    sa.ForeignKeyConstraint(['schedule_id'], ['schedule.schedule_id'], ),
    sa.ForeignKeyConstraint(['specialist_id'], ['specialist.specialist_id'], ),
    sa.PrimaryKeyConstraint('reservation_id')
    )
    op.add_column('specialist', sa.Column('comuna_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'specialist', 'comuna', ['comuna_id'], ['comuna_id'])
    op.drop_column('specialist', 'special_field')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('specialist', sa.Column('special_field', sa.VARCHAR(length=120), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'specialist', type_='foreignkey')
    op.drop_column('specialist', 'comuna_id')
    op.drop_table('reservation')
    op.drop_table('schedule')
    op.drop_table('comuna')
    op.drop_table('region')
    op.drop_table('client')
    # ### end Alembic commands ###