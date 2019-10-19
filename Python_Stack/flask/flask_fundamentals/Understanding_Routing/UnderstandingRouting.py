from flask import Flask  

app = Flask(__name__)    
@app.route('/')          
def hello_world():
    return 'Hello World!'  

@app.route('/dojo')          
def Dojo():
    return 'Dojo'  

@app.route('/say/<name>') 
def hello(name):
    print(name)
    return "Hello " + name

@app.route('/repeat/<rpet>/<name>')
def repeat(rpet, name):
    return name*int(rpet)

if __name__=="__main__":   
    app.run(debug=True)