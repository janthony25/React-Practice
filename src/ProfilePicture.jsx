function ProfilePicture(){
    const imageUrl = "../src/images/react-logo.png"
    // const handleClick = () => console.log("ouch!")
    const handleClick = (e) => e.target.style.display = "none"

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    )
}

export default ProfilePicture