import sqlite3

connection = sqlite3.connect('demo.db')

cur = connection.cursor()

#cur.execute('CREATE TABLE team_members(name, role, prefered_language)')
cur.execute("INSERT INTO team_members VALUES('Someone', 'developer', 'c')")
res = cur.execute('SELECT * FROM team_members')
connection.commit()
print(res.fetchone())
