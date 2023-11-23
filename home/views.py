from django.shortcuts import render

# Create your views here.

def react(request):
    context = {"app": "home"}
    return render(request, "react_app.html", context)
