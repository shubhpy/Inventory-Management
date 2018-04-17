#!/bin/bash
TIMESTAMP=`TZ=IST-5:30 date +%F-%H%M`
GITHUB_LINK="https://github.com/shubhpy/My-Vue-Project.git"
DOCKERNAME="Inventory-Frontend"
IMAGENAME="qci-inventory"
REPONAME="My-Vue-Project"

git clone -b UI $GITHUB_LINK
mv /var/lib/jenkins/workspace/inventory-frontend-pipeline/dist/ /var/lib/jenkins/workspace/inventory-frontend/ 
rm -rf $REPONAME
docker stop $DOCKERNAME
docker rm $DOCKERNAME
docker rmi $IMAGENAME
docker build -t $IMAGENAME .
docker run -dt --name $DOCKERNAME $IMAGENAME
