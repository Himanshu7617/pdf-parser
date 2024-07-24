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
            #trying to access files 
            files = request.FILES.getlist('fileSet')  

            print(files)
            return JsonResponse({"message":len(files)})
        
    except (KeyError, ValueError):
        return JsonResponse({"message":"invalid method"})