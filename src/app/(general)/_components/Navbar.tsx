const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <ul className="flex justify-around">
        <li className="text-white">
          <a href="#hero">Hero</a>
        </li>
        <li className="text-white">
          <a href="#about">About</a>
        </li>
        <li className="text-white">
          <a href="#feature">Feature</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
