from flask import Flask,redirect,render_template,request,session
import random

app = Flask(__name__)
app.secret_key = "sssh it's a SECRET!"

@app.route('/') 
def index():
    if "your_gold" not in session:
        session["your_gold"]=0
        session["activities"]=[]
    return render_template("index.html")

@app.route('/process_money', methods=['POST']) 
def result():
	process_money(request.form['location'])
	return redirect('/')

def process_money(location):
	new_gold = 0
	if location == "farm":
		new_gold = random.randrange(10,21)
	if location == "cave":
		new_gold = random.randrange(5,11)
	if location == "house":
		new_gold = random.randrange(2,6)
	if location == "casino":
		new_gold = random.randrange(-50,51)
	session['your_gold'] += new_gold
	session['activities'].append({"location":location, "new_gold":new_gold})

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)