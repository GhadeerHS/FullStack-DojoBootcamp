from django.shortcuts import render,HttpResponse,redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    context={
        "random_str": get_random_string(length=14)
    }
    if not ('count' in request.session):
        request.session['count'] = 1
    else:
        request.session['count']+=1
    print("request.session['count']", request.session['count'])
    return render(request,"random_word/index.html",context = context)

def reset(request):
    if request.method == "POST":
        if request.POST["submit"] == "Reset":
            del request.session['count']
        return redirect('/random_word')