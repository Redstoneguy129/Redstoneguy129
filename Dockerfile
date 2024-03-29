FROM denoland/deno:1.33.2

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts --lock=deno.lock --lock-write

EXPOSE 8000

CMD ["run", "-A", "main.ts"]
