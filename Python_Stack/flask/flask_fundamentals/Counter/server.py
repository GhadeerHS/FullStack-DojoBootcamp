from flask import Flask, render_template, request, redirect, session
app = Flask (__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def default():
    if 'counter' in session:
        session['counter'] = session.get('counter') + 1
    else:
        session['counter'] = 1
    return render_template("index.html", counter = session['counter'])

@app.route('/addtwo')
def addtwo():
    session['counter'] += 1
    return redirect('/')

@app.route('/reset')
def reset():
    session['counter'] = 0
    return redirect('/')

@app.route('/destroy')
def destroy():
    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)