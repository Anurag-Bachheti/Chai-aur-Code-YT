
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
"login": "HERCULES0000",
"id": 157354714,
"node_id": "U_kgDOCWEK2g",
"avatar_url": "https://avatars.githubusercontent.com/u/157354714?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/HERCULES0000",
"html_url": "https://github.com/HERCULES0000",
"followers_url": "https://api.github.com/users/HERCULES0000/followers",
"following_url": "https://api.github.com/users/HERCULES0000/following{/other_user}",
"gists_url": "https://api.github.com/users/HERCULES0000/gists{/gist_id}",
"starred_url": "https://api.github.com/users/HERCULES0000/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/HERCULES0000/subscriptions",
"organizations_url": "https://api.github.com/users/HERCULES0000/orgs",
"repos_url": "https://api.github.com/users/HERCULES0000/repos",
"events_url": "https://api.github.com/users/HERCULES0000/events{/privacy}",
"received_events_url": "https://api.github.com/users/HERCULES0000/received_events",
"type": "User",
"site_admin": false,
"name": "Anurag Bachheti",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 4,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2024-01-22T08:21:19Z",
"updated_at": "2024-08-26T08:11:32Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('anuragdotbachheti')
})

app.get('/login', (req, res) => {
  res.send('<h1>Do Login to Chai aur Code</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})