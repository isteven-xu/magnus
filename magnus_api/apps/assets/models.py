from django.db import models
from libs import ModelMixin, human_datetime


class Base(models.Model, ModelMixin):
    company_id = models.CharField(max_length=255, primary_key=True)
    company_name = models.CharField(max_length=255)
    credit_no = models.CharField(max_length=255)
    province = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    district = models.CharField(max_length=255)
    district_code = models.CharField(max_length=255)
    company_address = models.CharField(max_length=255)
    company_code = models.CharField(max_length=255)
    org_code = models.CharField(max_length=255)
    tax_code = models.CharField(max_length=255)
    establish_date = models.CharField(max_length=255)
    legal_person = models.CharField(max_length=255)
    legal_person_caption = models.CharField(max_length=255)
    company_status = models.CharField(max_length=255)
    company_major_type = models.CharField(max_length=255)
    company_type = models.CharField(max_length=255)
    authority = models.CharField(max_length=255)
    issue_date = models.CharField(max_length=255)
    operation_startdate = models.CharField(max_length=255)
    operation_enddate = models.CharField(max_length=255)
    business_scope = models.CharField(max_length=255)
    cancel_date = models.CharField(max_length=255)
    cancel_reason = models.CharField(max_length=255)
    revoke_date = models.CharField(max_length=255)
    revoke_reason = models.CharField(max_length=255)
    capital_currency = models.CharField(max_length=255)
    capital = models.CharField(max_length=255)
    real_capital = models.CharField(max_length=255)
    capital_exchange_cny = models.CharField(max_length=255)
    real_capital_exchange_cny = models.CharField(max_length=255)
    en_name = models.CharField(max_length=255)
    list_code = models.CharField(max_length=255)
    stock_status = models.CharField(max_length=255)
    is_state_owned = models.CharField(max_length=255)
    is_sme = models.CharField(max_length=255)
    scale_type = models.CharField(max_length=255)
    tax_type = models.CharField(max_length=255)
    legal_person_type = models.CharField(max_length=255)
    legal_person_id = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    create_time = models.CharField(max_length=255)
    update_time = models.CharField(max_length=255)
    id = models.CharField(max_length=255)
    industry_l1_name = models.CharField(max_length=255)
    industry_l2_name = models.CharField(max_length=255)
    industry_l3_name = models.CharField(max_length=255)
    industry_l4_name = models.CharField(max_length=255)
    industry_l4_code = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'dwd_bi_company_base_df'
