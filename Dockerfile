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
RUN git clone https://github.com/Redstoneguy129/Redstoneguy129.git && cd Redstoneguy129 && npm install && npm run build && pip3 install -r requirements.txt

EXPOSE 80 2545

COPY /Redstoneguy129/nginx.conf /etc/nginx/nginx.conf

RUN cd /Redstoneguy129/ && python3 update.py
