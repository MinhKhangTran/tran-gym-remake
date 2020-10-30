import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="flex justify-center px-4 text-gray-100 bg-black">
        <div class="container py-6">
          <h1 class="text-center text-lg font-bold lg:text-2xl">
            Jetzt anmelden und heute schon profitieren!
          </h1>

          <div class="flex justify-center mt-6">
            <div class="bg-white rounded-md">
              <div class="flex flex-row flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent"
                  placeholder="E-mail"
                  aria-label="E-mail"
                />
                <button class="w-full m-1 p-2 text-sm bg-black rounded font-semibold uppercase lg:w-auto hover:bg-gray-700">
                  Abschicken
                </button>
              </div>
            </div>
          </div>

          <hr class="h-px mt-6 bg-gray-700 border-none"></hr>

          <div class="flex flex-col items-center justify-center mt-6 md:flex-row">
            <div>
              <a
                href="#trangym"
                class="text-xl font-bold text-gray-100 hover:text-gray-400"
              >
                TranGym
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
