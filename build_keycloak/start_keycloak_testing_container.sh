#!/bin/bash

docker rm keycloak-testing-container || true

cd /Users/tetianastupak/keycloak_react/build_keycloak

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -e JAVA_OPTS=-Dkeycloak.profile=preview \
   -v /Users/tetianastupak/keycloak_react/build_keycloak/src/main/resources/theme/my-app-keycloack-finnaly:/opt/keycloak/themes/my-app-keycloack-finnaly:rw \
   -it quay.io/keycloak/keycloak:18.0.2 \
   start-dev
