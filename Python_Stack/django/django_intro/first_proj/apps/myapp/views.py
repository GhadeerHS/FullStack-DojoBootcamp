from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")
def new(request):
    return HttpResponse("place holder to display a new form to create a new blog")

def create(request):
    return redirect('/')

def show(request, number):
    return HttpResponse("a placeholder to display blog number: {number}")

def edit(request,number):
    return HttpResponse("placeholder to edit blog {number}")

def destroy(request,number):
    return redirect('/')