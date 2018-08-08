# rx-Chat
### Follow these steps to run this project.

1. First you need to execute `npm install` in *client* and *server* folders.

1. You will need to change the Client IP connection.
    1. move to *cliente* folder, open *sockets/socket.js*
    1. at Line 6, change to your change the YOUR_IP_ADDRESS to your LAN IP.         
```javascript
    const socket = new WebSocket('ws://YOUR_IP_ADDRESS:8080');
```
3. To start the application you need to:    
    1. move in *client* folder and execute `npm start`
    1. move in *server* folder and execute `node app.js`

1.  Share your React application IP and talk which other.