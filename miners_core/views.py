from django.shortcuts import render
from datetime import datetime

from django.http import HttpResponse


def index(request):
    now = datetime.now()
    context = {"now": now}
    return render(request, "index.html", context)
