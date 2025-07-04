import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
        <div className='py-16 bg-white text-center'>
            User: {userId}
        </div>
    )
}
export default User;