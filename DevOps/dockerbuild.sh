#!/bin/bash
TIMESTAMP=`TZ=IST-5:30 date +%F-%H%M`
GITHUB_LINK="https://github.com/shubhpy/My-Vue-Project.git"
DOCKERNAME="Inventory-Frontend"
IMAGENAME="qci-inventory"
REPONAME="My-Vue-Project"
FolderName="inventory-frontend"
PipelineName="inventory-frontend-pipeline"

git clone -b UI $GITHUB_LINK
rm -rf /var/lib/jenkins/workspace/$FolderName/dist/
mv /var/lib/jenkins/workspace/$PipelineName/dist/ /var/lib/jenkins/workspace/$FolderName/ 
rm -rf $REPONAME
docker stop $DOCKERNAME
docker rm $DOCKERNAME
docker rmi $IMAGENAME
docker build -t $IMAGENAME /var/lib/jenkins/workspace/$FolderName/.
docker run -dt --name $DOCKERNAME $IMAGENAME
