from django.http import JsonResponse


def foo(request):
    return JsonResponse({"foo": "bar"})
