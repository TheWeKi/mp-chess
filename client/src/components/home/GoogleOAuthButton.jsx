const GoogleOAuthButton = () => {
    return (
        <button className="bg-base-500 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded inline-flex items-center">
            <img src="src/assets/google-logo.svg" alt="Google Logo" class="w-12 h-12 mr-2" />
            Sign in with Google
        </button>
    )
}

export default GoogleOAuthButton;