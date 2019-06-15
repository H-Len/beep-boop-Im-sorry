# _beep-boop-Im-sorry_

#### _user enters a number and has all numbers leading up to it returned, with a few exceptions, 2019_

#### By _**Hannah Melendy**_

## Description

_This application takes in a user's number, returns all numbers from 0 to the user's input displayed on the screen. Any number containing a '3', '2', or '1' will have an exception and a string will be returned in its place.
 * Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
 * Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
 * Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

The exceptions returned have an order of priority, which is in descending order. The exception for '3' takes priority over '2', '2' over '1'. For example, '32' will be returned as "I'm sorry..." and 12 will be returned as "Boop"._

## Specs

| Behavior | Input | Output |
| ---- | ---- | ---- |
| form to submit number | type in number | number is recorded from user |
| display user's number | user enters number | variable with number will be displayed on page |
| display counting up to number| user enters '2'| "0, 1, 2" will be displayed on the screen in a results section |
| enter user's name | user enters their name | name is used in result response |
| exception to '1' | user enters number | any number in the series containing a '1' will display the exception for '1's |
| exception to '2' and '3'| user enters number | exceptions for '2' and '3' in the list will display |
| indices of multi-digit numbers are evaluated | user enters number more than single digit | 3 > 2 > 1 when it comes to which exception takes priority
| priority to displayed exceptions | user enters number more than single digit | the number '12' is replaced by "Boop" |


## Setup/Installation Requirements

* open app in browser of your choice
* enter a number in specified field

_internet is required to run this app_

## Link to GitHub Pages

_Link to GitHub repo:_
[beep-boop-Im-sorry](https://github.com/H-Len/beep-boop-Im-sorry.git)


### License

* _open source_

Copyright (c) 2019 **_Hannah Melendy_**
