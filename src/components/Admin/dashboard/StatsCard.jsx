import { motion } from "framer-motion";

const StatsCard = ({ title, value, subtitle, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow rounded-xl p-6 flex items-center gap-6"
    >
      <div className="bg-purple-200 p-3 rounded-lg">
        <Icon size={28} className="text-purple-600" />
      </div>

      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <h2 className="text-3xl font-bold">{value}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default StatsCard;
