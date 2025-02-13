import { LoginModalProps } from "../types/props";

const LoginModal: React.FC<LoginModalProps> = ({
    showLoginForm,
    setLoginError,
    loginError,
    setAuth,
    setShowLoginForm}) => {

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const username = (form.elements.namedItem('username') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
        
        if (username === 'hacker' && password === 'htn2025') {
            setAuth({ isAuthenticated: true, username });
            setShowLoginForm(false);
            setLoginError('');
        } else {
            setLoginError('Invalid credentials. Please try again.');
        }
        };

    return (
        <>
        {showLoginForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-gray-900 p-8 rounded-lg border border-[#CC7C83]/20 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-[#CC7C83]">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm mb-1">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full p-2 rounded bg-gray-800 border border-[#CC7C83]/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full p-2 rounded bg-gray-800 border border-[#CC7C83]/20"
                      required
                    />
                  </div>
                  {loginError && (
                    <p className="text-red-500 text-sm">{loginError}</p>
                  )}
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowLoginForm(false)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-[#CC7C83] text-black px-4 py-2 rounded hover:bg-[#CC7C83]/80 transition-colors"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          </>
        );
}

export default LoginModal;