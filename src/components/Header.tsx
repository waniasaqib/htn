import TypewriterText from "../utils/TypewriterText";
import { HeaderProps } from "../types/props";

const Header: React.FC<HeaderProps> = ({
    auth,
    handleLogout,
    setShowLoginForm
}) => {
    return (
        <>
        <div className="flex justify-between items-center mb-8">
            <TypewriterText 
              text="hhackathon events" 
              color="text-[#CC7C83]" 
              fontSize="text-4xl"
            />
            {auth.isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-[#CC7C83] text-black px-4 py-2 rounded hover:bg-[#CC7C83]/80 transition-colors"
              >
                Logout ({auth.username})
              </button>
            ) : (
              <button
                onClick={() => setShowLoginForm(true)}
                className="bg-[#CC7C83] text-black px-4 z-50 py-2 rounded hover:bg-[#CC7C83]/80 transition-colors"
              >
                Login
              </button>
            )}
          </div>
          <p className="text-custom-light text-xl font-lily mt-4 max-w-2xl">
            discover amazing workshops, activities, and tech talks. 
            {!auth.isAuthenticated && " log in to see all events!"}
          </p>
        </>
    );
}

export default Header;