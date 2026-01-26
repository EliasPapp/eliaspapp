"use client"
import { TextButton } from "./text-button.jsx"
import { IconButton } from "./icon-button.jsx"
import "./styles/pages.css"

export default function Page() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Lexend" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>
      <body>
        <div>
          <img className="avatar" src="images/profile-pic.png" alt="Profile picture" />
          <h1>Elias Papp</h1>
          <h2>Web developer</h2>

          <TextButton
            text={"Youtube portfolio"}
            url={"https://www.youtube.com/@EliasPappBR"}
          />
          <TextButton
            text={"Instagram portfolio"}
            url={"https://www.instagram.com/elias.papp.gamedev"}
          />
          <TextButton
            text={"Newgrounds account"}
            url={"https://1999elias.newgrounds.com/"}
          />
          <TextButton
            text={"Secondary Youtube channel"}
            url={"https://www.youtube.com/@EliasPappBR2"}
          />
          <TextButton
            text={"RetroAchievements"}
            url={"https://retroachievements.org/user/EliasPapp"}
          />
          <TextButton
            text={"CTR4ever"}
            url={"https://ctr4ever.joora.fr/player.php?pid=1495"}
          />

          <IconButton
            icon={"fa fa-linkedin-square"}
            url={"https://www.linkedin.com/in/elias-papp"}
          />
          <IconButton
            icon={"fa fa-github"}
            url={"https://github.com/EliasPapp"}
          />
          <IconButton
            icon={"fa fa-instagram"}
            url={"https://www.instagram.com/elias.papp"}
          />
        </div>
      </body>
    </html>
  )
}