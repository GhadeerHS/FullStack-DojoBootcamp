from flask import Flask, render_template, request, redirect, session
import random 
app = Flask(__name__)

app.secret_key = "sssh it's a SECRET"

@app.route('/')
def index():
    session['number']=random.randint(1,100)
    print(session['number'])
    return render_template("index.html")

@app.route('/guess', methods=['POST'])
def guess():
    guess = int(request.form['number'])
    if guess == session['number']:
        session['response']= "That's Rigth , Good gusing!"
        session['color'] = "darkgreen"
    if guess > session['number']:
        session['response']= 'Too high!'
        session['color'] = "darkred"
    elif guess < session['number']:
        session['response']= 'Too low!'
        session['color'] = "darkred"
    return redirect('/result')

@app.route('/result')
def result():
    return render_template("index.html", response=session['response'], color=session['color'])
    
@app.route('/reset')
def reset():
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)