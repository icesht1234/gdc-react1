import '../styles/ProfileCard.css'

const ProfileCardItem = {
    name: '장근원',
    text: '안녕하세요',
    image: './meloon.png'
}

export default function ProfileCard() {
    return (
        <>
        <div>
            <img src={ProfileCardItem.image} alt="사진" 
            className='profile-image' />
            <h1 className='profile-name'>{ProfileCardItem.name}</h1>
            <p className='profile-bio'>{ProfileCardItem.text}</p>
        </div>
        </>
    )
}