# IVS_Project_Calc
IVS 2021 project. Building Electron.js application for Windows (building via JavaScript, HTML, CSS). 
# INTRODUCTION
### What is this project about?
Well, our task was to create a *calculator* using any type of tools.
### What have we decided to do?
We decided to create a desktop application using **Electron.js** framework. This frameworks allows us to build desktop application using *JavaScript, HTML & CSS* tools. **Psst!** This project is a rocket! :rocket:
### What else is to be found here?
Our task also was to create:
 - Program, and user documentation
 - Back-end tests (it was based on test-driven development)
 - Program installer & uninstaller
 - MockUp
### What platform is this built for?
Simple answer, **#Windows**.

# COLLABORATORS
 - **Martin Pech**    
    *martafonek.1@gmail.com*
 - **David Konečný**
 - **Krištof Šiška**

# MATHEMATICAL FUNCTIONS DESRIPTION 
`addUp` Adds up two numbers *1 + 1 = 2*

`substract` Substracts two numbers *2 - 1 = 1*

`mutiply` Multiplies two numbers *2 x 4 = 8*

`divide` Divides two numbers *8 ÷ 4 = 2*

`factorial` Calculates the factorial of given number *3! = 6*

`toPower` Calculates n-th power of given number *3 ^ 2 = 9*

`squareRoot` Calculates the 2nd square root of given number *√9 = 3*

`nthSquareRoot` Calculates the n-th square root of given number *4√44 = 2.575*

`logarithm` Calculates logarithm to the base of 10 *log10 = 4.605*

`abs` Calculates the absolute value of number given *|-23| = 23*

# KEYBOARDHANDLER FUNCTIONS DESRIPTION
`insertNumber` is called when user inserts a number

`backspace` is called when user wants to erase characters one by one

`eraseAll` is called when user wants to erase all displays and clear the variables

`eraseField` is called there is a need of erasing inputField (the one at the bottom)

`operation(operator)` is called when operator is given, it receives opcode of the operator and then behave according to it

`result` is called when result of the operation is requested. It can be requested by user, or code itself

`getAns` is called when previous result is requested

`convert` is used to convert unsigned numbers to signed, it also works the other way

`NumberAndOperation` is object

`keyboardHandler` also handles key presses, if certain button is pressed, the appropriate operation is called

# LICENCE 
 GNU General Public License v3 - https://www.gnu.org/licenses/gpl-3.0.en.html

# INSTALLATION INSTRUCTIONS
1) First of all, download source files. You can use `.zip` files, or simply navigate to our project via terminal and url.
2) Select a file to unzip the downloaded files, and unzip them.
3) Run `make.exe` or open your command line and execute `make`.
4) Wait until all important contents will be downloaded.
If any error occures, please ready the documentation. All requirements and possible solutions can be found there.
5) Navigate into `IVS-Project-Calc` folder.
6) Run `Calculator_IVS_Project Setup [version].exe` file.
7) An nsis installer will pop-up. 
8) Install the application using this installer.
9) Your final product can be found in selected path.

# DEMO TEST
In order to test if all the files necessary for calculator were downloaded correctly and were linked together, you can run series of tests.
First of all uncomment `module-exports` section in **Math.js** and then run `make test`. 

**All tests should pass!** 

If any of them fails, please check if the error is not caused by small difference in decimal number. If so, you can consider the test as successfull.

To test profiling application, please it up and hit run. It will start with the test input of *(1 2 3 4 5)*. Result should be displayed and should equal to *1.5811...*


# HOW TO CONTRIBUTE?
Project is private at the moment. No one except the Proton Team (our group of developers) cannot contribute. When the project is opened, the proccess of contribution will be very simple. We are git project *still* :wink:

# PROJECT STATUS
- [x] In development
- [ ] Finished
