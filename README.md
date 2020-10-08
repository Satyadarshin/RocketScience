# RocketScience
This is a full-stack Javascript SPA built on MongoDB, Express.js, Vue.js, and Node.js. It is principally a self-tutoring project, so at times the layout of user-facing content is less sophisticated than the code generating it, because that is likely where my working ground is.

The presumption is that you are a professional Web developer familliar with basic CLI commands, Git, and (a framework like) Vue.js, evaluating the code as a portfolio piece. 

In this document I'll describe how to set up the project locally and how it is deployed to it's [production environment on Heroku](https://mercury-atlas.herokuapp.com/).

The project is in two parts. This, the parent project, is the build outcome, deployed from Github to a Heroku dyno. The files in the `/public` directory are generated from a Vue.js project, which is a separate Git repo named [RocketScienceClient](https://github.com/Satyadarshin/RocketScienceClient).

Clone *RocketScience* and cd into the project directory `/rocket-science`. Run `npm install`.  

Clone *RocketScienceClient* (you can optioanlly rename the resulting ditrectory to `/client`) and run `npm install`. Skip to it's own README.md for further setup.

## MongoDB
The database connection string has had the login redacted for security. If you need to run the project locally, then  contact <s.Dog@satyadarshin.com> for the environment variables (**note** that these will be returned at my discretion).

## Express
Runs under port 5000. In the root directory, `npm run dev`



 