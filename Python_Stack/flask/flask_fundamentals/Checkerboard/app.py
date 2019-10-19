from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def play():
    return render_template("index.html")

@app.route('/<x>')
def play_x(x):
    return render_template("CheckerboardX.html", x =  int(x))

@app.route('/<x>/<y>')
def play_xy(x, y):
    return render_template("CheckerboardXY.html", x =  int(x), y =  int(y))

@app.route('/<x>/<y>/<color1>/<color2>')
def play_xyc(x, y,color1,color2):
    return render_template("CheckerboardXYC.html", x =  int(x), y =  int(y),color1=color1,color2=color2)

if __name__=="__main__":  
    app.run(debug=True)