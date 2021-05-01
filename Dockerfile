FROM nginx:alpine
RUN apk add git npm
RUN echo "**** install Python ****" && \
    apk add --no-cache python3 && \
    if [ ! -e /usr/bin/python ]; then ln -sf python3 /usr/bin/python ; fi && \
    \
    echo "**** install pip ****" && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools wheel && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi
RUN git clone https://github.com/Redstoneguy129/Redstoneguy129.git && cd Redstoneguy129 && rm -r /etc/nginx/nginx.conf && cp nginx.conf /etc/nginx/nginx.conf && ls -a &&  pip3 install -r requirements.txt
CMD ["python3", "update.py"]

