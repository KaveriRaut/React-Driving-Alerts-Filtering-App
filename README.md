# React JS : Driving Alerts Filtering App 

- Single page application : using React JS. 
- JSON server : used to create mock api. 
- This application displays all posts of driving alerts fetched from mock api created using JSON server.
- User can search posts of driving alert using text :
  - By driver's name. 
  - By type of driving alert. 
  - By vehicle's number plate.
- User can search posts of alert by date range filter as well. All post between start and end date will be displayed.
- Each post of driving alert contains :
  - Type of alert.
  - Driver's name.
  - Date and time.
  - False alarm set button.
  
---

# Tech Stack Used : 

- React JS
- CSS
- JSON server : mock API

---

# Run the Project on Local Machine  :

### Creating mock API using JSON server
1. Installation : npm install -g json-server
2. Start Server: json-server --watch db.json
3. Open the db.json file from directory where you installed the JSON server. 
4. Add sample data from 'SampleData.json' file from this repo. created by me to that db.json file
5. Now you can access the data using endpoints http://localhost:3000/alerts or http://localhost:3000/vehicles
6. To learn more follow Documentation : https://github.com/typicode/json-server

### Clone the github repository
1. Download ZIP of github repository manually and extract in local folder or clone git repository to local folder using VS code editor directly.
2. Open that folder in VScode and run following commands in terminal. 
3. To install all dependancies and packages : npm install
4. To run the react app : npm start
5. Make sure that JSON server is started first at localhost:3000 then react app running on any other port.

#### if module not found error occurs in react install following packages seperately
- npm i @date-io/date-fns@1.x date-fns
- npm i @date-io/moment@1.x moment

---

## Video Demo :

https://user-images.githubusercontent.com/97447480/222922266-7e1819c0-572a-4f7d-9897-f01b3c5fd9f3.mp4


---
