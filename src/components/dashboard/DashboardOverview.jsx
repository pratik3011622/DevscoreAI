import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileCheck, Target, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    { name: 'Mon', active: 40, matches: 24 },
    { name: 'Tue', active: 30, matches: 139 },
    { name: 'Wed', active: 20, matches: 98 },
    { name: 'Thu', active: 27, matches: 39 },
    { name: 'Fri', active: 18, matches: 48 },
    { name: 'Sat', active: 23, matches: 38 },
    { name: 'Sun', active: 34, matches: 43 },
];

const StatCard = ({ title, value, subtext, color, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group hover:border-${color}-500/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.2)]`}
    >
        <div className={`absolute -inset-0.5 bg-gradient-to-br from-${color}-500/20 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity`}></div>
        <div className="relative flex justify-between items-start">
            <div>
                <p className="text-gray-400 text-sm font-medium">{title}</p>
                <h3 className="text-3xl font-bold mt-2 text-white">{value}</h3>
                <div className="flex items-center mt-1 space-x-2">
                    <span className={`text-xs text-${color}-400 bg-${color}-500/10 px-1.5 py-0.5 rounded`}>{subtext}</span>
                </div>
            </div>
            <div className={`p-3 rounded-xl bg-white/5 text-${color}-400 group-hover:scale-110 transition-transform`}>
                <Icon size={24} />
            </div>
        </div>
    </motion.div>
);

const DashboardOverview = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Active Assessments" value="12" subtext="+2 this week" color="cyan" icon={FileCheck} delay={0.1} />
                <StatCard title="Total Applicants" value="1,284" subtext="▲ 15%" color="purple" icon={Users} delay={0.2} />
                <StatCard title="Avg. Match Rate" value="85%" subtext="High Accuracy" color="pink" icon={Target} delay={0.3} />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Chart Section */}
                <div className="lg:col-span-3 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 min-h-[350px] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold flex items-center text-white">
                            <TrendingUp className="mr-2 text-purple-400" size={20} />
                            Activity Trends
                        </h3>
                        <div className="flex space-x-2">
                            {['D', 'W', 'M'].map(t => (
                                <button key={t} className={`text-xs px-2 py-1 rounded ${t === 'W' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-500 hover:text-white'}`}>{t}</button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full h-full min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorMatches" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                                <Area type="monotone" dataKey="matches" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorMatches)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DashboardOverview;
