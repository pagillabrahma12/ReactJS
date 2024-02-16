





const Profile=()=>{
const ProfileInformation={
    name:"brahma",
    address:"l.b.Nagar",
    url:"https://i.pinimg.com/originals/14/fc/03/14fc030a45875ea3021063e18d433ea5.png",
    dimesions:150
}
    const {name,address,url,dimesions}=ProfileInformation

return(
    <div>
        <h1>{name}</h1>
        <h2>{address}</h2>
        <img src={url} height={dimesions} width={dimesions}></img>

    </div>


)

}
export default Profile