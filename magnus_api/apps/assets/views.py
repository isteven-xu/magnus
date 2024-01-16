from django.views.generic import View
from libs import json_response, JsonParser, Argument, auth
from apps.assets.models import Base
from libs import json_response


class BaseView(View):
    @auth('assets.logo.view')
    def get(self, request):
        company_name = request.GET.get('company_name')
        if company_name:
            _data = Base.objects.using('starrocks').filter(company_name__icontains=company_name).all()[:100]
            return json_response(_data)
        _data = Base.objects.using('starrocks').all()[:100]
        return json_response(_data)

