FROM centos:7

ENV TZ=Asia/Shanghai

RUN rpm -ivh https://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm
RUN yum install -y nginx redis mariadb-devel python36 python36-devel openldap-devel supervisor git gcc wget unzip net-tools sshpass rsync sshfs && yum -y clean all

RUN pip3 install --no-cache-dir --upgrade pip -i https://mirrors.aliyun.com/pypi/simple/
RUN pip3 install --no-cache-dir -i https://mirrors.aliyun.com/pypi/simple/ \
    gunicorn \
    mysqlclient \
    cryptography==36.0.2 \
    apscheduler==3.7.0 \
    asgiref==3.2.10 \
    Django==2.2.28 \
    channels==2.3.1 \
    channels_redis==2.4.1 \
    paramiko==2.11.0 \
    django-redis==4.10.0 \
    requests==2.22.0 \
    GitPython==3.0.8 \
    python-ldap==3.4.0 \
    openpyxl==3.0.3 \
    user_agents==2.2.0

RUN yum -y upgrade
RUN localedef -c -i en_US -f UTF-8 en_US.UTF-8
ENV LANG=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8
RUN echo -e '\n# Source definitions\n. /etc/profile\n' >> /root/.bashrc
RUN mkdir -p /data/repos
COPY docker/init_magnus /usr/bin/
COPY docker/nginx.conf /etc/nginx/
COPY docker/ssh_config /etc/ssh/
COPY docker/magnus.ini /etc/supervisord.d/
COPY docker/redis.conf /etc/
COPY docker/entrypoint.sh /

COPY magnus_api /data/magnus/magnus_api/
COPY magnus_web/build /data/magnus/magnus_web/build/

VOLUME /data
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]