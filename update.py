from http.server import BaseHTTPRequestHandler, HTTPServer
from hmac import new, compare_digest
from dotenv import load_dotenv
from os import getenv, getcwd
from subprocess import call
from hashlib import sha256
from git.cmd import Git
from json import loads
gitRepo = Git(getcwd())


def verify_signature(payload_body, secret, signature):
    return compare_digest("sha256=" + new(bytes(secret, 'UTF-8'), payload_body, sha256).hexdigest(), signature)


class Server(BaseHTTPRequestHandler):
    def do_POST(self):
        payload = self.rfile.read(int(self.headers['Content-Length']))
        self.send_response(204) if verify_signature(payload, getenv("SECRET_KEY"), self.headers.get("x-hub-signature-256")) else self.send_response(401)
        payload = loads(payload.decode("utf-8"))
        self.end_headers()
        if payload["action"] == "published":
            print("Updating Website")
            gitRepo.pull()
            call("npm install && npm run build", shell=True)

    def log_message(self, format, *args):
        return


if __name__ == "__main__":
    load_dotenv()
    webServer = HTTPServer(("0.0.0.0", 2545), Server)
    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass
    webServer.server_close()
