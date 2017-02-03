FROM mhart/alpine-node:7

RUN mkdir /app
WORKDIR /app
ADD ./package.json /app/package.json
RUN npm i

ADD ./bump-version.js /app/bump-version.js

CMD ["/app/bump-version.js"]
