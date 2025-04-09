function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 md:w-36 md:h-36 mx-auto" 
        />
        <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-4">Mlamuli Ncube</h1>
        <p className="text-sm sm:text-base md:text-base text-gray-600">
          Mlaah Loves Coding
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  
  