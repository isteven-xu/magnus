
from django.core.management.base import BaseCommand
from apps.monitor.scheduler import Scheduler
import logging

logging.basicConfig(level=logging.WARNING, format='%(asctime)s %(message)s')


class Command(BaseCommand):
    help = 'Start monitor process'

    def handle(self, *args, **options):
        s = Scheduler()
        s.run()
