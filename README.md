# CodeClicker

Incremental game where you click on a computer to earn lines of code and later you can hire developers to code for you or even startups and big techs.

## Description

Incremental game, heavily influenced by Cookie Clicker and created from scratch using Ruby on Rails and vanilla JavaScript.
The user initially clicks on a big computer on the screen, earning a single line of code per click. They can then use their earned code to purchase "developers" and other "buildings" that automatically produce lines of code per second.

## How I worked in this project

With my love for classic online games and inspired by Cookie Clicker I developed a version with my knowledge at the time of Vanila JS from scracth, setting timers, conditionals, a refresher that adds all the lines of code depending of the "buildings" the user has and even creates random images for every new item the user buys.

The app also uses the Rails Device for user authentification although this means it needs a database gem (PostgreSQL) and I am having troubles to deploy it to a free site.

## Screenshots

## How to Navigate 

The main JS logic running all the backend features can be found in the main controller in:

**app>javascript>controllers>code_computer_controller.js**

The layout file showing all the HTML and the way the app will is displayed can be found in:

**app>views>pages>home.html.erb**

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Executing program

Download the app and run it in localhost with:
```
rails s
```

## Help

Any advise for common problems or issues.

## Authors

Contributors names and contact info:

Gorka Echavarri

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

