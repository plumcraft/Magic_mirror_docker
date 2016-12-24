FROM ubuntu:16.04
MAINTAINER plumcraft <olivier.lebhard@gmail.com>

ADD . /tmp
RUN /tmp/resources/scripts/setup_magic_mirror.sh

COPY resources/config/config.js /root/MagicMirror/config/

RUN /tmp/resources/scripts/setup_modules.sh

COPY resources/scripts/mm_launcher.sh /
RUN chmod +x /mm_launcher.sh

ENTRYPOINT ["/mm_launcher.sh"]
