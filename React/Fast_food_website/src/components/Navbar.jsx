import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex  flex-row justify-between ">
        <div className="grid grid-cols-2 gap-0 place-items-start">
          {/* <h1>Hii</h1> */}
          <div className="h-20 w-20 ">
            <img
              src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
              alt="My Logo"
            ></img>
          </div>
          <div className="grid grid-cols-1 gap-0 place-items-start py-6">
            <h1 className="text-2xl font-bold">Foo</h1>
          </div>
        </div>

        <div className="flex justify-evenly gap-10 py-3 px-3">
          <div>
            <h1>Home</h1>
          </div>
          <div>
            <h1>Menu</h1>
          </div>
          <div>
            <h1>Contact</h1>
          </div>
          <div>
            <h1>About</h1>
          </div>
        </div>

        <div className="flex items-center justify-center  bg-gray-100">
          <div className="  relative border border-gray-300 p-4 w-96 flex items-center justify-between space-x-4">
            <h1>Search</h1>
          </div>
          <div className=" relative right-5">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
