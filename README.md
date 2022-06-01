# 👑 Selfbot-Discord !

### 📚 Préqrequis :

[node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr)

# 🛡️ TOS
Petit rappel, l'utilisation d'un selfbot est **interdit** par __discord__ eux-même.

La question concernant les « self-bots » a été soulevée ici et là, et nous aimerions clarifier notre position :

L'API de Discord fournit un type distinct de compte utilisateur dédié à l'automatisation, appelé compte bot. Les comptes de bot peuvent être créés via la page des applications et sont authentifiés à l'aide d'un jeton (plutôt qu'un nom d'utilisateur et un mot de passe). Contrairement au flux OAuth2 normal, les comptes de bot ont un accès complet à toutes les routes API sans utiliser de jetons de support et peuvent se connecter à la passerelle en temps réel. L'automatisation des comptes d'utilisateurs normaux (généralement appelés "self-bots") en dehors de l'API OAuth2/bot est interdite et peut entraîner la fermeture du compte s'il est détecté.
Pour lire la suite [cliquez ici](https://support.discord.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-)

# Installation

- Allez dans le fichier **.env** et compléter les informations demandé, pour avoir votre token connécté vous à [discord.com](https://discord.com/) et collé ce code dans la console

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
```

Une fois cela fait votre TOKEN est copier dans votre __presse-papier__

# ✔️ Lancer le bot !

Si vous êtes sur **linux** faite cette commande dans le terminal : **chmod a+x start.sh**, puis **./start.sh**

#### Il vous reste plus qu'a faire un help pour voir toute les commandes !

| Type                                                                                     |                                  Description                                   |                            State                            |
|------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------:|
| <img src="assets/comic.png" width="16" vertical-align="middle"/> NitroSniper               |           Take a nitro anything it is drop                           |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> History               |                Saves all received messages, even if they are deleted                           |   <font style="font-size: 16px;">🔨</font>    |
| <img src="assets/nice.png" width="16" vertical-align="middle"/> Crypto               |                  Allows to see in real time the prices of crypto currencies                  |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Ping               |                       Shows user latency and discord                       |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Pic               |                      Allows you to see a person's profile picture                       |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Cat               |                  Send a picture of random cat                  |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Dog               |                   Like cat but for dog                         |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Meme               |                         Like cat and dog but for meme                          |   <font style="font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> Clearme               |                     Delete your own posts from any channels                      |   <font style="font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> Spam               |                     Spam a message in a channel(s)                         |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> Cp_pp               |               Copy the pp of a person (a save of the current one is made)                |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> Cp_user               |            Copy all the information of a person (a save of you are made)             |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/nice.png" width="16" vertical-align="middle"/> Emotes               |               Lots of emotes are available!                   |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Avatar               |                     Change your avatar without the photo or gif                     |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> Bio               |                         Change your bio                         |    <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/nice.png" width="16" vertical-align="middle"/> Status               |                    Change your status                    |  <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/comic.png" width="16" vertical-align="middle"/> Aboutme               |                Change your aboutme                |   <font style="color: green; font-size: 16px;">✓</font>    |
| <img src="assets/good.png" width="16" vertical-align="middle"/> Info_user               |         Give some information to a user         |  <font style="color: green; font-size: 16px;">🔨</font>    |
| <img src="assets/nice.png" width="16" vertical-align="middle"/> Info_serv               |                           Give some information to a guild                           |   <font style="color: green; font-size: 16px;">🔨</font>    |

###### If you have some idea send me a message : MisTrale.js#9999
