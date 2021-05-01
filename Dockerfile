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
RUN git clone https://github.com/Redstoneguy129/Redstoneguy129.git && cd Redstoneguy129 && npm install && npm run build && rm -r /usr/share/nginx/html/* && cp -a build/. /usr/share/nginx/html/ && pip3 install -r requirements.txt && cp nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 2545

CMD ["python3", "/Redstoneguy129/update.py"]
