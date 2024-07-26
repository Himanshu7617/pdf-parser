from django.shortcuts import render
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import os
from tabula import read_pdf, convert_into
import pandas as pd

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
    
def test():
    pdf_path = os.path.join(settings.BASE_DIR, 'parser', 'static', 'parser','test.pdf')
    if os.path.exists(pdf_path):
        dfs = read_pdf(pdf_path,pages='all')
        print("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
        for i in dfs:
            lista = i.values.tolist()
            print(lista)
        print('********************************************************')
        
        
    else:
        print("no sir")

test()