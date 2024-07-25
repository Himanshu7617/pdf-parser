from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def home(request):
    if request.method == "GET":
        return JsonResponse({"message":"connection successfully established"})
    else:
        return JsonResponse({"message": "not yet"})

@csrf_exempt

def fileInput(request):
    try:
        if request.method == "POST":
            #trying to access files but failing so badly
            #god help me
            return JsonResponse({"message":"successfully"})
        
    except (KeyError, ValueError):
        return JsonResponse({"message":"invalid method"})