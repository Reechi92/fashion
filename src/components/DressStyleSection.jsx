import { motion } from "framer-motion";

export default function DressStyleSection() {
  return (
    <section className="dressStyle">
      <h1 style={{ fontSize: 48 }} className="contentTitle">BROWSE BY DRESS STYLE</h1>

      <div className="style">
        <motion.div
          className="casual"
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <p className="textStyle">Casual</p>
          <motion.img
            src="img/dressStyle/casual.svg"
            alt="casual"
            width={407}
            height={293}
            initial={{ scale: 1, borderRadius: 20 }}
            whileHover={{ scale: 1.05, borderRadius: 30 }}
            transition={{ type: "tween", duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="formal"
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <p className="textStyle">Formal</p>
          <motion.img
            src="img/dressStyle/formal.svg"
            alt="formal"
            width={684}
            height={293}
            initial={{ scale: 1, borderRadius: 20 }}
            whileHover={{ scale: 1.05, borderRadius: 30 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <div className="styleDown">
        <motion.div
          className="party"
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <p className="textStyle">Party</p>
          <motion.img
            src="img/dressStyle/party.png"
            alt="party"
            width={684}
            height={293}
            initial={{ scale: 1, borderRadius: 20 }}
            whileHover={{ scale: 1.05, borderRadius: 24 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="gym"
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <p className="textStyle">Gym</p>
          <motion.img
            src="img/dressStyle/gym.png"
            alt="gym"
            width={407}
            height={293}
            initial={{ scale: 1, borderRadius: 20 }}
            whileHover={{ scale: 1.05, borderRadius: 24 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}