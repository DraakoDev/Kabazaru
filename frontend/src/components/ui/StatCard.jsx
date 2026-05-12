import { motion } from "framer-motion";

export const StatCard = ({ title, value, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-3xl shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h3 className="text-3xl font-black mt-2">
            {value}
          </h3>
        </div>

        <div className="bg-orange-100 text-orange-500 p-4 rounded-2xl">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};