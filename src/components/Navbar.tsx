import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="hidden md:flex md:border">
        <div className="bg-white h-full py-2 fixed left-1 top-1 w-[6%] rounded-xl text-center flex flex-col text-[0.8rem]">
          <Link
            to="contact"
            className="hover:bg-black hover:text-white rounded p-2"
          >
            Contact
          </Link>
          <Link
            to="chart"
            className="hover:bg-black hover:text-white rounded p-2"
          >
            Charts
          </Link>
        </div>
      </div>

      <div className="flex md:hidden">
        <div className="bg-white py-2 px-[4px] z-[100] fixed left-0 top-0 w-full text-center text-[15px] flex justify-end">
          <Link
            to="contact"
            className="hover:bg-black hover:text-white rounded p-2"
          >
            Contact
          </Link>
          <Link
            to="chart"
            className="hover:bg-black hover:text-white rounded p-2"
          >
            Charts
          </Link>
        </div>
      </div>
    </>
  );
}
