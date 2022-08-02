import React, { useState } from 'react'
import { CheckIcon } from "@heroicons/react/solid";

function DataModal({ reset, invoice, creditNote }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    const total = {
      clp: invoice.amount_clp - creditNote.amount_clp,
      usd: invoice.amount_usd - creditNote.amount_usd
    }
    setIsOpen(false)
    reset(total)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
      <>
        <div className="text-center">
          <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Asignar
          </button>
        </div>

        {isOpen && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

                <div
                    className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-xl leading-6 font-medium text-gray-900 pb-8">
                        Nota de cr&eacute;dito asignada correctamente
                      </h3>
                      <div className="mt-2">
                        <div className="text-sm text-gray-500 space-y-6 text-left">
                          <p className="flex flex-col">
                            <span>
                              <span className="text-gray-900 font-semibold">Factura #</span> {invoice.id}
                            </span>
                            <span>
                              <span
                                  className="text-gray-900 font-semibold">Monto:</span> {invoice.amount_clp} CLP
                            </span>
                          </p>
                          <p className="flex flex-col">
                            <span>
                              <span className="text-gray-900 font-semibold">Nota credito #</span> {creditNote.id}
                            </span>
                            <span>
                              <span
                                  className="text-gray-900 font-semibold">Monto:</span> {creditNote.amount_clp} CLP
                            </span>
                          </p>
                          <p className="text-indigo-900 font-semibold text-md">
                            Monto restante de la
                            factura: {invoice.amount_clp - creditNote.amount_clp} CLP
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        onClick={closeModal}
                    >
                      Seguir asignando
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </>
  )
}

export default DataModal;
