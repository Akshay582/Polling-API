# Polling-API

The folder structure is as follows:

**/polling-api**
&emsp;/config
&emsp;&emsp;mongoose.js
&emsp;/models
&emsp;&emsp;questions.js
&emsp;/api
&emsp;/routes
&emsp;/controllers
&emsp;index.js
&emsp;readme.md

### API Routes:

- `/api/questions/create`  - The api is capable of creating the options this way also.
- `/api/questions/:id/options/create`
- `/api/questions/:id/delete`
- `/api/options/:id/delete`
- `/api/options/:id/add_vote`
- `/api/questions/:id`
- `/api/questions` - Extra route to fetch all the polls in the database added so far.

