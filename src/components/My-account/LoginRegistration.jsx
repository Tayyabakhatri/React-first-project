import React from "react";

const LoginRegistration = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* col 1 */}
          <div className="my-4">
            <h3 className="text-[36px] font-[600] dark:text-white">Login</h3>
            <div className="mb-3">
              <p>Username or email address</p>
              <div>
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div class="mt-2">
                  <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      placeholder="email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div>
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div class="mt-2">
                  <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      placeholder="password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input type="checkBox" /> Remember me
            </div>
            <div className="flex align-middle">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Log in
              </button>
              <p>Lost your Password</p>
            </div>
          </div>
          {/* col2 */}
          <div className="my-4">
            <h3 className="text-[36px] font-[600] dark:text-white mb-4">
              Registration
            </h3>

            <div>
              <div className="mb-3">
                <div>
                  <label
                    for="price"
                    class="block text-sm/6 font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        placeholder="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="mb-[30px]">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegistration;
