/**
 * ----------------
 * ONE TIME for pc
 * ----------------
 * 1.Create heroku account 
 * 2.Verify email 
 * 3.Install heroku CLI
 * 4.heroku login  cmd of own cmd command not bash
 * -------------------------
 * For each project one time 
 * -------------------------
 * 1.heroku create
 * 2.Make sure : git add .git commit -m . git push
 * 3.git push heroku main
 * 4.Go to heroku dashboard > current project > project setting > reveal config vars 
 * 5.Copy paste config vars from .env file 
 * 6.Make sure you have whitelisted all ip address to access mongodb
 * ---------------------------
 * Update server with new changes
 * ---------------------------
 * 0.Make changes
 * 1.Make sure : git add .git commit -m . git push
 * 2.git push heroku main
 * ---------------------------
 * Connect server with client and deploy client
 * ---------------------------
 * 1.Replace localhost by heroku link
 * 2.npm run build
 * 3.firebase deploy
 */