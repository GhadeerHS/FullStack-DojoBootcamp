from flask import Flask, render_template  # added render_template!
app = Flask(__name__)                     
    
@app.route('/')                           
def hello_world():
    # Instead of returning a string, 
    # we'll return the result of the render_template method, passing in the name of our HTML file
    return render_template('index.html')

@app.route('/<name>/<times>') 
def hello_person(name,times):
    print("*"*80)
    print("in hello_person function")
    print(name)
    return render_template('name.html',some_name=name,times=int(times))   
    
if __name__=="__main__":
    app.run(debug=True)                   
