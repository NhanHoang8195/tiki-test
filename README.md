This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup and run TIKI-TEST app

After clone this repo to your local machine, do following steps to run this app:   
Run command:
1. ###`cd tiki-test`
2. ###`npm install`
3. ###`npm start`

After finished all of the commands above, you can open any browsers and   
access to `http://localhost:3000` to book a ticket of cinema.

You can review quickly with review throw these files in order:   
index.js => containers/home/App.js.

Structure for this project.   

<pre>
src/   
  ├──common/  
  |    ├──checkbox/   
  |    |      ├──index.js   
  |    |      └──styles.scss   
  |    ├──header/   
  |    |      ├──index.js   
  |    |      └──styles.scss   
  |    └──noteElement/   
  |           ├──index.js   
  |           └──styles.scss   
  ├──constants/   
  |    ├──index.js   
  |    └──mockData.json   
  ├──containers/   
  |    └──home/   
  |        ├──__tests__/   
  |        |     └──App.test.js   
  |        ├──App.js   
  |        ├──App.scss      
  |        ├──note.js      
  |        ├──roomSeats.js      
  |        └──rowSeats.js      
  ├──styles/   
  |    ├──color.scss   
  |    └──index.scss   
  ├──ulti/   
  |    └──index.js   
  ├──index.css   
  ├──index.js   
  └── serviceWorker.js
</pre>
