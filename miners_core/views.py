from django.shortcuts import render
from datetime import datetime

from django.http import HttpResponse


def react(request):
    now = datetime.now()
    context = {"now": now}
    return render(request, "react.html", context)
