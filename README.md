# CRUDAngularNode

Application to create, edit and list products. Made with Angular/Bootsrap [Frontend] + NodeJS/Express/MongoDB [Backend]


Products List:
<img src='https://i.imgur.com/55rDtk4.png' alt='app screenshot 1'/>

Create a product:
<img src='https://i.imgur.com/QImRW1x.png' alt='app screenshot 1'/>


## Instructions <a name = "instructions"></a>

Please follow the below instructions in order to install the application on your computer.
<br><br>

## Prerequisites

You must have:
- [Visual Code](https://code.visualstudio.com/) installed, with the extension 'Live server'.
- [NodeJS](https://nodejs.org/) installed.
- [MongoCompass](https://www.mongodb.com/products/compass) installed.
<br><br>

### Installation

Follow the steps below in the correct order to install the project from Github:

1- Choose a system folder, then launch a Command prompt (Windows key + R, write 'CMD' and click ok, or shift + right click > Open Powershell window, then clone the repository with the following command:

```
git clone https://github.com/federicocapucci/CRUDAngularNode.git
```

2- Afterwards, open Visual code from inside the downloaded folder, (or click on file > 'Open folder' alternatively). Then run the following command in a VSC terminal, to install the necessary packages/dependencies.

```
npm install
```
3- Then proceed to launch the front End server in the same terminal. Should open a browser on the url http://localhost:4200

```
ng serve
```


3- Next, please open MongoDB Compass program. Click Connect > New Connection and connect to this URL

```
mongodb+srv://fede:Test1234@cluster0.pziijfb.mongodb.net
```


4- Go back to VS Code, and on a different terminal, access the 'server' folder, then run the following command to launch the backend server:

```
npm run dev
```

Application should now be running



## Autor <a name = "autor"></a>

- [federicocapucci](https://github.com/federicocapucci)
