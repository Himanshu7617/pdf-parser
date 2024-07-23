from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
    if request.method == "GET":
        return JsonResponse({"message":"connection successfully established"})
    else:
        return JsonResponse({"message": "not yet"})
