# About the project
With the fustration of public discord bots not having the option to customise your stat channels, I came to the conclusion to why make one myself and adapt it into [Million Token's Server](https://twitter.com/Million__Token)

Please show your support by reacting with `watch` or ⭐

### Built With

* [Node.js](https://nodejs.org/)
* [discord.js](https://discord.js.org/)

***
# **I. Mechanism**
Through the help of discord's official module, discord.js, I was able freely interact with it's API through js like how a normal individual would use the desktop app. After collecting the significant IDs of each needed channels/roles, I used a command to search for how many people had that certain requirement (e.g. how many people were online). After scraping the numbers, I manipulated the channel's name to be that certain number and made it repeat that line of command for X milliseconds.

# **II. Why you should use it?**
Why should I use this source code instead of easily inviting a bot to my server to do it for me? The answer is simple, personal satisfactions. I believe that everyone would rather customise certain things themselves without having to pay each month just to change the channel template name.

# **III. Contributing**

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Read the [Feature Template](./template.md)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# **V. Installation**

Processes 7 - 9 are optional and does not need to be followed if you wish to leave it at default settings.

1. Fork the project
2. Download and install dependencies (`npm install`)
3. Cd into repo folder
4. Go to Discord's [Dev Portal](https://discord.com/developers/applications) and create a new application + bot
5. Open up 'config.json' and paste the bot's token in PASTE_TOKEN_HERE
6. Open up 'index.js' and paste required IDs under the Configurations title in PASTE_ID
7. Change text inside of " " under Set Channel Names for totalUsers, onlineUsers, and roles
8. Change the milliseconds on line 42 to your choice
9. Change the prefix in 'config.json'
