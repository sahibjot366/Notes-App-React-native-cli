
# Notes App

Created in React Native using react native cli. Create and maintain List of Notes,
edit and delete a note.

## Demo
https://user-images.githubusercontent.com/79393792/149494391-65dccaf7-d0b5-4ac6-9f8f-1eb18b9fb432.mp4


## Features

- Users can create a new note.
- Users can see a list of all notes.
- Users can click on a note to see the details.
- Users can open a note and start editing the text.
- When the user clicks the back button, the note is added to the list of saved notes.
- The note is automatically saved on text change.
- Users can delete a note.


## Tech Stack

ECMAscript, react-native-cli, React Native, Hooks, Async Storage, Android SDK



## Running in Your Machine

Write following commands in your command line
```bash
git clone git@github.com:sahibjot366/NotesAppChallenge.git
cd NotesAppChallenge
npm install
```
#### Setup development environment 

A Mac is required to build projects with native code for iOS.

For Android, You will need Node, the React Native command line interface, a JDK, and Android Studio.

To set  up development environment, follow https://reactnative.dev/docs/environment-setup

Note : Make sure to Follow instructions for react-native-cli and not expo

After following above steps, in the project folder run following command to start Metro Server

```bash
  npx react-native start
```
Open android folder in the project in Android Studio.

Connect your physical device in USB debugging mode and install app in your mobile phone using Android Studio. Or you can build and run app in android emulator

To start development server 
- Move to directory where package-tools are installed (By default package-tools are at C:\Users\user\AppData\Local\Android\Sdk\platform-tools )
- Run following command to get names of devices connected
```bash
    .\adb.exe devices
```
- To make connection with server run
```bash
    .\adb.exe -s DEVICE_NAME reverse tcp:8081 tcp:8081
```




## Authors

- [Sahibjot Singh](https://github.com/sahibjot366)

