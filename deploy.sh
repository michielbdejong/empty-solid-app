git checkout deploy
git merge -
npm run build
cd build
ln -s index.html 404.html
cd ..
git add --force build
git commit --no-verify -am"build"
git push
git checkout -