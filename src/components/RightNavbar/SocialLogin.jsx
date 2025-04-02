import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
     <div>
          <h2 className="text-xl font-semibold mb-5">Login With</h2>
          
              <div className='flex flex-col gap-2'>
                  <button className='btn border-solid border-green-500 text-[18px]'><FaGoogle></FaGoogle> Login with Google</button>
                  <button className='btn border-solid border-black text-[18px]'><FaGithub></FaGithub> Login with Github</button>
              </div>
          
        </div>
  )
}

export default SocialLogin