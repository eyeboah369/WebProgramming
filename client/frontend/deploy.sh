#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# adding and pushing updates build to remote origin 
git add dist && git commit -m "updated distribution"
git push

# addding changes to subtree pages branch 

cd ../..
git subtreee push --prefix /client/frontend/dist origin pages


cd -