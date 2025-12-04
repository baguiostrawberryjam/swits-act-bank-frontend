import React, { useState } from 'react';
import { X, ChevronDown, Check, AlertCircle } from 'lucide-react';

// --- 1. Internal Helper Components (Consolidated for stability) ---

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyle = "rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 focus:ring-slate-400",
  };
  return (
    <button className={`${baseStyle} px-4 py-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Input = ({ label, type = "text", className = "", ...props }) => (
  <div className={`space-y-1.5 ${className}`}>
    {label && <label className="block text-sm font-medium text-slate-700">{label}</label>}
    <input
      type={type}
      className="block w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-white"
      {...props}
    />
  </div>
);

// Select component removed as it is no longer used, but keeping it if needed for future is fine. 
// For cleanliness, I will leave it here but unused, or I could remove it. 
// I'll keep it just in case other parts need it later, but the Modals won't use it.
const Select = ({ label, options, ...props }) => (
  <div className="space-y-1.5">
    {label && <label className="block text-sm font-medium text-slate-700">{label}</label>}
    <div className="relative">
      <select
        className="block w-full pl-3 pr-10 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white appearance-none"
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-slate-400" />
      </div>
    </div>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-lg transform rounded-xl bg-white p-6 text-left transition-all sm:my-8">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-semibold leading-6 text-slate-900">{title}</h3>
          <button onClick={onClose} className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-500">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// --- 2. Specific Modal Definitions ---

const DepositModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Deposit Funds">
    <div className="space-y-4">
      {/* Changed from Select to Input */}
      <Input label="Deposit To Account Number" placeholder="Enter account number" />
      
      <div className="relative">
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-emerald-600 font-bold">$</span>
          </div>
          <input type="number" className="block w-full pl-8 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500" placeholder="0.00" />
        </div>
      </div>
      <Input label="Source / Description" placeholder="e.g. Paycheck" />
      <div className="pt-2 flex gap-3">
        <Button variant="secondary" className="flex-1" onClick={onClose}>Cancel</Button>
        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 border-none">Confirm Deposit</Button>
      </div>
    </div>
  </Modal>
);

const WithdrawModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Withdraw Funds">
    <div className="space-y-4">
      {/* Changed from Select to Input */}
      <Input label="Withdraw From Account Number" placeholder="Enter account number" />

      <div className="relative">
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-slate-500 font-bold">$</span>
          </div>
          <input type="number" className="block w-full pl-8 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="0.00" />
        </div>
      </div>
      <Input label="Reason" placeholder="e.g. ATM" />
      <div className="pt-2 flex gap-3">
        <Button variant="secondary" className="flex-1" onClick={onClose}>Cancel</Button>
        <Button className="flex-1">Confirm Withdrawal</Button>
      </div>
    </div>
  </Modal>
);

const TransferModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Transfer Money">
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Changed from Select to Input */}
        <Input label="From Account Number" placeholder="Account Number" />
        <Input label="To Account Number" placeholder="Account Number" />
      </div>
      <div className="relative">
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Amount</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-slate-500 font-bold">$</span>
          </div>
          <input type="number" className="block w-full pl-8 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="0.00" />
        </div>
      </div>
      <Input label="Note" placeholder="e.g. Savings Goal" />
      <div className="pt-2 flex gap-3">
        <Button variant="secondary" className="flex-1" onClick={onClose}>Cancel</Button>
        <Button className="flex-1">Send Transfer</Button>
      </div>
    </div>
  </Modal>
);

// --- 3. Main Page Component ---

function Transactions() {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);

  // Accounts data removed as it is no longer used for dropdown options

  // UPDATED: Removed 'Pending' status
  const transactions = [
    { id: 1, name: "Netflix Subscription", type: "Subscription", date: "2023-10-01", amount: "$12.99", status: "Completed" },
    { id: 2, name: "John Doe", type: "Transfer", date: "2023-10-02", amount: "$250.00", status: "Completed" },
    { id: 3, name: "Grocery Store", type: "Purchase", date: "2023-10-03", amount: "$76.45", status: "Completed" },
    { id: 4, name: "Freelance Client", type: "Deposit", date: "2023-10-04", amount: "$500.00", status: "Completed" },
    { id: 5, name: "Electric Bill", type: "Bill Pay", date: "2023-10-05", amount: "$89.30", status: "Failed" },
  ];

  return (
    <>
      <div className="min-h-screen bg-white p-8">
        
        <h1 className="text-4xl font-bold">Transactions</h1>
        
        <div className="my-4">
          <p className="text-lg text-gray-600">Manage your money and view history.</p>
        </div>

        <div className="flex justify-between items-center w-full mb-8">
          <div className="space-x-2">
            <button 
              onClick={() => setShowDeposit(true)}
              className="btn bg-white border shadow-none border-gray-300 text-black px-8 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Deposit
            </button>
            <button 
              onClick={() => setShowWithdraw(true)}
              className="btn bg-white border shadow-none border-gray-300 text-black px-8 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Withdraw
            </button>
            <button 
              onClick={() => setShowTransfer(true)}
              className="btn bg-blue-600 border-none shadow-none outline-none text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Transfer
            </button>
          </div>

          <div>
            <input 
              type="text" 
              placeholder="Search..."
              className="bg-white outline-none border border-gray-300 p-2 w-70 rounded-md focus:border-blue-500 transition-colors" 
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 font-semibold text-gray-600">Name</th>
                <th className="p-4 font-semibold text-gray-600">Type</th>
                <th className="p-4 font-semibold text-gray-600">Date</th>
                <th className="p-4 font-semibold text-gray-600">Amount</th>
                <th className="p-4 font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b last:border-none hover:bg-gray-50">
                  <td className="p-4 font-medium">{t.name}</td>
                  <td className="p-4 text-gray-500">{t.type}</td>
                  <td className="p-4 text-gray-500">{t.date}</td>
                  <td className="p-4 text-gray-700">{t.amount}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold 
                      ${t.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        'bg-red-100 text-red-700'}`}
                    > 
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Render Modals --- */}
        <DepositModal 
          isOpen={showDeposit} 
          onClose={() => setShowDeposit(false)} 
        />
        <WithdrawModal 
          isOpen={showWithdraw} 
          onClose={() => setShowWithdraw(false)} 
        />
        <TransferModal 
          isOpen={showTransfer} 
          onClose={() => setShowTransfer(false)} 
        />

      </div>
    </>
  );
}

export default Transactions;