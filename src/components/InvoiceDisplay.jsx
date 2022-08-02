import React from 'react'
import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function InvoiceDisplay({ options, selectOption, selected }) {

  return (
      <RadioGroup value={selected} onChange={selectOption}>
        <RadioGroup.Label className="sr-only">Invoice plans</RadioGroup.Label>
        <div className="relative bg-white rounded-md -space-y-px">
          {options.map((option, idx) => (
              <RadioGroup.Option
                  key={option.index}
                  value={option}
                  className={({ checked }) =>
                      classNames(
                          idx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                          idx === options.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                          checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                          'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
                      )
                  }
              >
                {({ active, checked }) => (
                    <>
                      <div className="flex items-center text-sm">
                  <span
                      className={classNames(
                          checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                          active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                          'h-4 w-4 rounded-full border flex items-center justify-center'
                      )}
                      aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5"/>
                  </span>
                        <RadioGroup.Label
                            as="span"
                            className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'ml-3 font-medium')}
                        >
                          <span className="font-semibold">{option.id}</span> <span
                            className="font-medium text-gray-500">({option.organization_id})</span>
                        </RadioGroup.Label>
                      </div>
                      <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                  <span className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'font-medium')}>
                    <span
                        className="font-semibold">${option.amount_clp} CLP</span>
                  </span>{' '}
                        <span
                            className={checked ? 'text-indigo-700' : 'text-gray-500'}>(${option.amount_usd} USD) </span>
                      </RadioGroup.Description>
                      <RadioGroup.Description
                          className={classNames(
                              checked ? 'text-indigo-700' : 'text-gray-500',
                              'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                          )}
                      >
                        {option.type === 'received' ? 'Recibida' : option.reference}
                      </RadioGroup.Description>
                    </>
                )}
              </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
  )
}

export default InvoiceDisplay;
