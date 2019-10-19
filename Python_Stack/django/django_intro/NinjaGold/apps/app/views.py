from django.shortcuts import render,HttpResponse,redirect
import random
import datetime

def index(request):
    if not ('your_gold' in request.session):
        request.session['your_gold'] = 0
        request.session['activities'] = []
    return render(request, "app/index.html")

def process_money(request):
    if request.method=="POST":
        form =request.POST['location']
        if form == 'farm':
            new_gold = random.randint(10, 20)
        elif form == 'cave':
            new_gold = random.randint(5, 10)
        elif form == 'house':
            new_gold = random.randint(2, 5)
        elif form == 'casino':
            new_gold = random.randint(-50, 50)

        request.session['your_gold'] += new_gold
        if new_gold >0:
            request.session['activities'].insert(0,"<p style='text-align: left; color: green'>Earned" +str(new_gold) +" golds from the"+ form +"</p>")   
        else:
            request.session['activities'].insert(0,"<p style='text-align: left; color: red'>Earned a" +form +"and lost"+ str(new_gold)+"..ouch..</p>")
    return redirect('/')

def reset(request):
    del request.session['your_gold']
    del request.session['activities']
    return redirect('/')