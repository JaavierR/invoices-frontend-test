import '../App.css';
import InvoiceDisplay from './InvoiceDisplay';
import { useEffect, useState } from "react";
import DataModal from "./DataModal";

function App() {
  const [data, setData] = useState([
    {
      id: "inv_MRlj0lt95XyQjvPY",
      amount: 40000000,
      organization_id: "piedpiper",
      currency: "CLP",
      type: "received",
    },
    {
      id: "inv_KedI7Yt22XM64129",
      amount: 16000,
      currency: "USD",
      organization_id: "piedpiper",
      type: "received",
    },
    {
      id: "inv_QerT7Yt22XM64MN3",
      amount: 4000000,
      currency: "CLP",
      organization_id: "piedpiper",
      type: "credit_note",
      reference: "inv_KedI7Yt22XM64129",
    },
    {
      id: "inv_012mGPt6Vb2w49GR",
      amount: 800,
      currency: "USD",
      organization_id: "piedpiper",
      type: "credit_note",
      reference: "inv_KedI7Yt22XM64129",
    },
    {
      id: "inv_nDAprkt7D0LKjkE2",
      amount: 80000,
      currency: "USD",
      organization_id: "octopus",
      type: "received",
    },
    {
      id: "inv_JitErYt22XM64MN3",
      amount: 40000,
      currency: "CLP",
      organization_id: "octopus",
      type: "credit_note",
      reference: "inv_nDAprkt7D0LKjkE2",
    },
  ]);
  const [invoices, setInvoices] = useState([]);
  const [creditNotes, setCreditNotes] = useState([]);
  const [filterCreditNotes, setFilterCreditNotes] = useState([]);

  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [selectedCreditNote, setSelectedCreditNote] = useState(null)

  useEffect(() => {
    // ! Api call, but get cors error
    // fetch("https://recruiting.api.bemmbo.com/invoices/pending").then(res => res.json()).then(res => setData(res.data));
    const filterInvoices = data.filter(val => val.type === "received");
    const filterNotes = data.filter(val => val.type === "credit_note");
    setInvoices(filterInvoices);
    setCreditNotes(filterNotes);
  }, [data])

  function selectOption(option) {
    if (option.type === 'received') {
      const newData = creditNotes.filter(val => val.reference !== option.id);
      setSelectedInvoice(option)
      setFilterCreditNotes(newData);
      setSelectedCreditNote(null)
    } else {
      setSelectedCreditNote(option)
    }
  }

  function reset() {
    const newCreditNotes = creditNotes.filter(val => val.id !== selectedCreditNote.id);

    setSelectedInvoice(null)
    setSelectedCreditNote(null)
    setFilterCreditNotes([])

    setCreditNotes(newCreditNotes);
  }

  return (
      <div className="max-w-4xl mx-auto my-6 space-y-6">
        <div>
          <h1 className="font-bold text-lg text-center mb-6">Selecciona una factura</h1>
          <InvoiceDisplay options={invoices} selected={selectedInvoice}
                          selectOption={selectOption}/>
        </div>

        {filterCreditNotes.length > 0 && (
            <div>
              <h1 className="font-bold text-lg text-center mb-6">Selecciona una nota de credito</h1>
              <InvoiceDisplay options={filterCreditNotes} selectOption={selectOption} selected={selectedCreditNote}/>
            </div>
        )}

        {selectedInvoice && selectedCreditNote && (
            <DataModal reset={reset} invoice={selectedInvoice} creditNote={selectedCreditNote}/>
        )}
      </div>

  );
}

export default App;
