#!/bin/bash
set -e

if [ -e /root/.bashrc ]; then
    source /root/.bashrc
fi

if [ -d /data/magnus/magnus_api ]; then
#    git clone -b $MAGNUS_DOCKER_VERSION https://gitee.com/openmagnus/magnus.git /data/magnus
#    curl -o web.tar.gz https://cdn.magnus.cc/magnus/web_${MAGNUS_DOCKER_VERSION}.tar.gz
#    tar xf web.tar.gz -C /data/magnus/magnus_web/
#    rm -f web.tar.gz
    SECRET_KEY=$(< /dev/urandom tr -dc '!@#%^.a-zA-Z0-9' | head -c50)
    cat > /data/magnus/magnus_api/magnus/overrides.py << EOF
import os

DEBUG = False
ALLOWED_HOSTS = ['127.0.0.1']
SECRET_KEY = '${SECRET_KEY}'

DATABASES = {
    'default': {
        'ATOMIC_REQUESTS': True,
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('MYSQL_DATABASE'),
        'USER': os.environ.get('MYSQL_USER'),
        'PASSWORD': os.environ.get('MYSQL_PASSWORD'),
        'HOST': os.environ.get('MYSQL_HOST'),
        'PORT': os.environ.get('MYSQL_PORT'),
        'OPTIONS': {
            'charset': 'utf8mb4',
            'sql_mode': 'STRICT_TRANS_TABLES',
        }
    },
    'starrocks': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('SR_DATABASE'),
        'USER': os.environ.get('SR_USER'),
        'PASSWORD': os.environ.get('SR_PASSWORD'),
        'HOST': os.environ.get('SR_HOST'),
        'PORT': os.environ.get('SR_PORT')
    }
}
EOF
fi

exec supervisord -c /etc/supervisord.conf
