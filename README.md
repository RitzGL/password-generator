# Password Generator

## Application

This application allows user to give it some criteria:

* Length of the password in number of characters.
* Include lower case characters
* Include upper case characters
* Include numbers
* Include symbols

The application takes these criteria, then randomly generates a string with all the specified characteristics.


# Application - Image


![Application shows generated password with minimal password length selected and including all character types.](./Assets/application-demo.png)


# Challenges


The use of prompts was specified as one of the features desired. This poses some issues. 

## Aler Box Behaviour

Firstly, the application, when given a string as a password length, tells the user that page needs to be reloaded. 

Though at first, the use of the function `window.location.reload()` was implemented, this only caused the browser to reload indefinitely, and it is postulated that the use of alerts is the cause; the rest of the alerts for the criteria is executed regardless, and due to the structure of the logic, the alerts cannot be stopped. Attempts at stopping the process were made, however, I was not able to fix this. 

## Randomisation

Secondly, the application's use of `Math.random()` to randomly generate values only makes the password generation pseudo-random. There is a clear bias for median values between 0 and 1, which is how the function operates. 

When attempting to satisfy the user criteria for the password, there was a chance that one of the desired character types would not be selected for insertion into the password string. To rectify this, when a criteria is selected, the script will generate a random character from one of the character type arrays, and insert it into the password string at the end, in order to try and ensure that the criteria is met. This was implemented with limited success, once again, due to the nature of how `Math.random()` operates.

# Maintenance

In future versions of the application, alternative methods of randomisation will be visited. In addtion, a form will be implemented in order to make the user experience more smooth, and ultimately fix the undesired behaviour of the alerts. 
