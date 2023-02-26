import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

function Main() {
  return (
    <div className="flex min-h-full flex-col justify-center py-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto"
          src="logo.png"
          alt="Name of the company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Faça seu Cadastro
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="user-nanme"
                className="block text-sm font-medium text-gray-600"
              >
                Nome completo
              </label>
              <div className="mt-1">
                <input
                  id="user"
                  name="user"
                  type="text"
                  autoComplete="user-name"
                  placeholder="ex: João da Silva"
                  required
                  className="focus:outline-none focus:ring-0 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Endereço de Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="ex: nome@dominio.com"                    
                  required
                  className="focus:outline-none focus:ring-0 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-gray-600"
              >
                Número de telefone
              </label>
              <div className="mt-1">
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="current-tel"
                  placeholder="(xx) xxxxx-xxxx"
                  required
                  className="focus:outline-none focus:ring-0 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="technologies"
                className="block text-sm font-medium text-gray-600"
              >
                Tecnologias que domina
              </label>
              <div className="mt-1">
                <input
                  id="technologies"
                  name="technologies"
                  type="text"
                  autoComplete="current-technologies"
                  placeholder="ex: React, Node, React Native, etc..."
                  required
                  className="focus:outline-none focus:ring-0 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="technologies-age"
                className="block text-sm font-medium text-gray-600"
              >
                Anos de expêriencia com as tecnologias
              </label>
              <div className="mt-1">
                <input
                  id="technologies-age"
                  name="technologies-age"
                  type="text"
                  autoComplete="current-technologies-age"
                  placeholder="ex: 1 ano, 2 anos, 3 anos, etc..."
                  required
                  className="focus:outline-none focus:ring-0 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 active:bg-orange-800"
              >
                Realizar cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
