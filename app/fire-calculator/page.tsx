"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Download, RefreshCw, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const FireCalculator = () => {
  // --- State: Input Parameters (Defaults from the CSV) ---
  const [inputs, setInputs] = useState({
    currentAge: 29,
    retireAge: 45,
    lifeExpectancy: 100,
    currentSavings: 1300000,
    monthlySavings: 30000,
    savingsIncreaseRate: 5, // Percent
    roi: 12, // Percent
    taxRate: 20, // Percent
    monthlyExpenses: 300000,
    inflation: 6, // Percent
  });

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({ brokeAge: null, finalCorpus: 0 });

  // --- Helper: Currency Formatter ---
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  // --- Core Simulation Logic ---
  useEffect(() => {
    const {
      currentAge,
      retireAge,
      lifeExpectancy,
      currentSavings,
      monthlySavings,
      savingsIncreaseRate,
      roi,
      taxRate,
      monthlyExpenses,
      inflation,
    } = inputs;

    let simulationData = [];
    let corpus = parseFloat(currentSavings as any);
    let annualSavings = parseFloat(monthlySavings as any) * 12;
    let annualWithdrawal = parseFloat(monthlyExpenses as any) * 12;
    
    // Effective ROI = ROI * (1 - Tax)
    // Based on CSV analysis (Row 30/31 logic)
    const effectiveRoiRate = (roi / 100) * (1 - (taxRate / 100));
    
    let hasRunOut = false;
    let runOutAge = null;

    for (let age = currentAge; age <= lifeExpectancy; age++) {
      const isRetired = age >= retireAge;
      const isTransitionYear = age === retireAge;

      // 1. Calculate Return on Investment (on opening balance)
      const investmentReturn = corpus * effectiveRoiRate;

      // 2. Determine Cashflows
      let savingsFlow = 0;
      let withdrawalFlow = 0;

      if (age < retireAge) {
        // Accumulation Phase
        savingsFlow = annualSavings;
        withdrawalFlow = 0;
        
        // Prepare savings for next year (step up)
        annualSavings = annualSavings * (1 + savingsIncreaseRate / 100);
      } else if (isTransitionYear) {
        // Transition Year (Based on CSV Row 45: Has both savings and withdrawal)
        savingsFlow = annualSavings;
        withdrawalFlow = annualWithdrawal;
        
        // Prepare withdrawal for next year (inflation)
        annualWithdrawal = annualWithdrawal * (1 + inflation / 100);
      } else {
        // Retirement Phase
        savingsFlow = 0;
        withdrawalFlow = annualWithdrawal;
        
        // Prepare withdrawal for next year
        annualWithdrawal = annualWithdrawal * (1 + inflation / 100);
      }

      // 3. Update Corpus
      // Logic: Start + Returns + Savings - Withdrawals
      const endCorpus = corpus + investmentReturn + savingsFlow - withdrawalFlow;

      // Check if broke
      if (endCorpus < 0 && !hasRunOut) {
        hasRunOut = true;
        runOutAge = age;
      }

      simulationData.push({
        age,
        corpus: Math.round(corpus),
        returns: Math.round(investmentReturn),
        savings: Math.round(savingsFlow),
        withdrawal: Math.round(withdrawalFlow),
        isRetired
      });

      corpus = endCorpus;
    }

    setData(simulationData as any);
    setStatus({
      brokeAge: runOutAge as any,
      finalCorpus: corpus
    });

  }, [inputs]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 pt-16 pb-20 md:pb-64 font-sans text-slate-800">

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-flow-col-dense grid-cols-5 rounded-xl overflow-hidden">
        <div className="col-span-3 row-span-3 bg-[#115a41] p-16 text-white flex flex-col justify-center">
          <h2 className="text-6xl font-bold playfair-display-normal"><span className="playfair-display-bold">FIRE</span> (Financial Independence Retire Early) Calculator</h2>
          <p className="text-lg mt-2"> Your FIRE number determines the total amount needed to achieve financial independence and early retirement.</p>
        </div>
        <div className="col-span-2 bg-[#1f233d] p-16 text-white">
          <h2 className='text-5xl font-bold'>₹{inputs.currentSavings.toLocaleString('en-IN')}</h2>
          <p>Current savings</p>
        </div>
        <div className="col-span-2 bg-green-600 p-16">
          <h2 className='text-5xl font-bold'>₹ {inputs.monthlySavings.toLocaleString('en-IN')}</h2>
          <p>Monthly savings</p>
        </div>
        <div className="bg-red-750 p-16 text-center bg-green-100">
          <h2 className='text-5xl font-bold'>{inputs.inflation}%</h2>
          <p>Inflation Rate</p>
        </div>
        <div className="bg-red-550 p-16 text-center">
          <h2 className='text-5xl font-bold text-green-800'>{inputs.retireAge.toLocaleString('en-IN')}</h2>
          <p>Retire age</p>
        </div>
      </div>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="text-orange-500" /> FIRE Simulation Calculator
            </h1>
          </div>
          
          <div className={`mt-4 md:mt-0 px-4 py-2 rounded-lg flex items-center gap-2 font-medium ${status.brokeAge ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
            {status.brokeAge ? (
              <>
                <AlertCircle size={20} />
                Funds run out at age {status.brokeAge}
              </>
            ) : (
              <>
                <CheckCircle size={20} />
                Sustainable until age {inputs.lifeExpectancy}
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold mb-4 text-slate-700 border-b pb-2">Personal Details</h2>
              <div className="space-y-4">
                <InputField label="Current Age" name="currentAge" value={inputs.currentAge} onChange={handleInputChange} />
                <InputField label="Retirement Age" name="retireAge" value={inputs.retireAge} onChange={handleInputChange} />
                <InputField label="Life Expectancy" name="lifeExpectancy" value={inputs.lifeExpectancy} onChange={handleInputChange} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold mb-4 text-slate-700 border-b pb-2">Financials</h2>
              <div className="space-y-4">
                <InputField label="Current Savings (₹)" name="currentSavings" value={inputs.currentSavings} onChange={handleInputChange} />
                <InputField label="Monthly Savings (₹)" name="monthlySavings" value={inputs.monthlySavings} onChange={handleInputChange} />
                <InputField label="Annual Step-up (%)" name="savingsIncreaseRate" value={inputs.savingsIncreaseRate} step="0.1" onChange={handleInputChange} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold mb-4 text-slate-700 border-b pb-2">Assumptions</h2>
              <div className="space-y-4">
                <InputField label="ROI Pre-tax (%)" name="roi" value={inputs.roi} step="0.1" onChange={handleInputChange} />
                <InputField label="Tax Rate (%)" name="taxRate" value={inputs.taxRate} step="0.1" onChange={handleInputChange} />
                <InputField label="Retirement Expense (Monthly ₹)" name="monthlyExpenses" value={inputs.monthlyExpenses} onChange={handleInputChange} />
                <InputField label="Inflation (%)" name="inflation" value={inputs.inflation} step="0.1" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* Visualization Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Chart Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold mb-6 text-slate-700">Corpus Trajectory</h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCorpus" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="age" 
                      label={{ value: 'Age', position: 'insideBottomRight', offset: -5 }} 
                      tick={{fill: '#64748b'}}
                    />
                    <YAxis 
                      tickFormatter={(value: any) => `${(value / 10000000).toFixed(1)}Cr`}
                      tick={{fill: '#64748b'}}
                      width={60}
                    />
                    <Tooltip 
                      formatter={(value: any) => formatCurrency(value)}
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="corpus" 
                      stroke="#f97316" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorCorpus)" 
                      name="Total Corpus"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-slate-700">Yearly Breakdown</h2>
                <div className="text-xs text-slate-400 font-mono">
                  Eff. ROI: {(inputs.roi * (1 - inputs.taxRate/100)).toFixed(2)}%
                </div>
              </div>
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600 font-medium sticky top-0">
                    <tr>
                      <th className="px-6 py-3">Age</th>
                      <th className="px-6 py-3">Opening Corpus</th>
                      <th className="px-6 py-3 text-green-600">Invest. Returns</th>
                      <th className="px-6 py-3 text-blue-600">Savings Added</th>
                      <th className="px-6 py-3 text-red-600">Withdrawals</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.map((row: any) => (
                      <tr key={row.age} className={`hover:bg-slate-50 ${row.corpus < 0 ? 'bg-red-50' : ''} ${row.age === inputs.retireAge ? 'bg-orange-50' : ''}`}>
                        <td className="px-6 py-3 font-medium text-slate-900">
                          {row.age}
                          {row.age === inputs.retireAge && <span className="ml-2 text-[10px] bg-orange-200 text-orange-800 px-1.5 py-0.5 rounded">RETIRE</span>}
                        </td>
                        <td className={`px-6 py-3 ${row.corpus < 0 ? 'text-red-600 font-bold' : ''}`}>
                          {formatCurrency(row.corpus)}
                        </td>
                        <td className="px-6 py-3 text-green-600">+{formatCurrency(row.returns)}</td>
                        <td className="px-6 py-3 text-blue-600">{row.savings > 0 ? `+${formatCurrency(row.savings)}` : '-'}</td>
                        <td className="px-6 py-3 text-red-600">{row.withdrawal > 0 ? `-${formatCurrency(row.withdrawal)}` : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, step = "1", type = "number" }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      step={step}
      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors text-slate-700"
    />
  </div>
);

export default FireCalculator;