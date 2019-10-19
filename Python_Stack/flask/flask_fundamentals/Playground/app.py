from flask import Flask, render_template  
app = Flask(__name__)                     
    
@app.route('/play')                           
def Play1():
    return render_template('Playground_1.html')

@app.route('/play/<times>') 
def Play2(times):
    return render_template('Playground_2.html', times=int(times))

@app.route('/play/<times>/<color>') 
def Play3(times,color):
    return render_template('Playground_3.html',times=int(times),color=color)
    
if __name__=="__main__":
    app.run(debug=True)          