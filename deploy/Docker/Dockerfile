FROM node:18-alpine AS nodejs-image

FROM nodejs-image AS build
WORKDIR /home/app
COPY . .
RUN yarn install
RUN yarn build

FROM nodejs-image AS service
WORKDIR /home/app
COPY --from=build /home/app/*.js  ./
COPY --from=build /home/app/*.json  ./
COPY --from=build /home/app/dist ./dist
COPY --from=build /home/app/node_modules ./node_modules
CMD node server.js

FROM build AS unit-tests
WORKDIR /home/app
CMD yarn test