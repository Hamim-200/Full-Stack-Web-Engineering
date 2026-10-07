import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10 font-sans">
      {/* Header Section */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back! Here is a summary of your account activity.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors">
            + Create New
          </button>
        </div>
      </header>

      {/* Metric Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-sm font-medium">Total Revenue</span>
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">
              +12.5%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-900">$24,500</p>
          <p className="text-xs text-slate-400 mt-1">Compared to last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-sm font-medium">Active Users</span>
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">
              +8.2%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-900">1,240</p>
          <p className="text-xs text-slate-400 mt-1">Compared to last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-sm font-medium">New Subscriptions</span>
            <span className="p-2 rounded-lg bg-rose-50 text-rose-600 text-xs font-semibold">
              -2.4%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-900">310</p>
          <p className="text-xs text-slate-400 mt-1">Compared to last month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-sm font-medium">Conversion Rate</span>
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold">
              +4.1%
            </span>
          </div>
          <p className="text-2xl font-bold text-slate-900">3.8%</p>
          <p className="text-xs text-slate-400 mt-1">Compared to last month</p>
        </div>
      </section>

      {/* Analytics & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analytics Card */}
        <section className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Overview</h2>
            <select className="text-xs border border-slate-300 rounded-md p-1.5 bg-white text-slate-600 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-slate-400 text-sm">
            Analytics Chart Placeholder
          </div>
        </section>

        {/* Recent Activity Card */}
        <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Recent Activity
          </h2>
          <ul className="divide-y divide-slate-100">
            <li className="py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-800">New Order #1024</p>
                <p className="text-xs text-slate-400">2 minutes ago</p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                +$120.00
              </span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-800">User Signup</p>
                <p className="text-xs text-slate-400">1 hour ago</p>
              </div>
              <span className="text-xs font-medium text-slate-500">Alex R.</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-800">System Alert</p>
                <p className="text-xs text-slate-400">3 hours ago</p>
              </div>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                Warning
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;