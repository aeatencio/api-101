#!/bin/bash

cp -r /usr/src/cache/node_modules/. /usr/src/app/node_modules/
node_modules/.bin/sequelize db:migrate
exec npm start
