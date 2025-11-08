import { useState } from "react";

function User({ user, cardStyle, imgStyle, infoStyle }) {
    const [theme, setTheme] = useState(cardStyle);
    const [infoTheme, setInfoTheme] = useState(infoStyle);
    console.log("thme",theme)
    console.log("infoTheme",infoTheme)
    return (
        <div style={cardStyle}>
            <img
                style={imgStyle}
                src="https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg"
                alt={user.name}
            />
            <div style={infoStyle}>
                <h2> Name : {user.name} </h2>
                <h2> Age : {user.age} </h2>
                <h2> City : {user.city} </h2>
            </div>
        </div>
    )

}

export default User
