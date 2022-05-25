
import click
from api.models import db, User

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed
    @app.cli.command("insert-test-specialists") # name of our command
    @click.argument("count") # argument of out command
    def insert_test__specialist_data(count):
        print("Creating test specialists")
        for x in range(1, int(count) + 1):
            specialist = Specialist()
            "specialist.comuna_id = 1" #tiene que existir, cargar datos
            specialist.specialist_mail = "test_specialist" + str(x) + "@test.com"
            specialist.specialist_name = "John" + str(x)
            specialist.specialist_lastname = str(x) + "Doe"
            specialist.cost = 19990
            specialist.address = "calle real 123" 
            specialist.desceription = "el mejor kine de la ciudad"
            specialist.comuna = "chuchuncocity"
            db.session.add(specialist)
            db.session.commit()
            print("Specialist: ", specialist.email, " created.")

        print("All test specialists created")