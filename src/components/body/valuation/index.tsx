import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./valuation.css";
import type { TooltipProps } from "recharts";
import Separator from "../../common/separator";
import { repositories } from "../../../data";
import type { Valuation } from "../../../data/repository/valuationRepository";

const Valuation = () => {
  const [valuationData, setValuationData] = useState<Valuation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchValuation = async () => {
      try {
        const data = await repositories.valuationData.getAll();
        setValuationData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching valuation data:", error);
      }
    };

    fetchValuation();
  }, []);

  const data = [
    { no: 1, name: "20s", title: "20s", valuation: 10, amt: 2400 },
    { no: 2, name: "", title: "Customer Service", valuation: 20, amt: 2210 },
    { no: 3, name: "", title: "Boot Camp", valuation: 15, amt: 2290 },
    { no: 4, name: "", title: "Start Working", valuation: 25, amt: 2000 },
    { no: 5, name: "BCIT", title: "BCIT", valuation: 30, amt: 2000 },
    { no: 6, name: "Co-op", title: "Co-op", valuation: 50, amt: 2500 },
    { no: 7, name: "Now", title: "Now", prediction: 60, valuation: 60, amt: 2181 },
    { no: 8, name: "30s", title: "After Graduation", prediction: 80, amt: 2100 },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="valuation">
      <Separator />
      <label className="section-title">Valuation</label>
      <div className="valuation-box">
        <ResponsiveContainer width="80%" height={300}>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <ReferenceLine x="Now" label="Now" />
            <Line type="monotone" dataKey="valuation" stroke="#1a48a0" strokeWidth={2} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="prediction" stroke="#1a48a0" strokeWidth={2} strokeDasharray="4 1" />
            <Tooltip content={<CustomTooltip valuationData={valuationData} />} position={{ x: 0, y: 300 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, valuationData }: TooltipProps<any, any> & { valuationData: Valuation[] }) => {
  if (active && payload && payload.length) {
    const { title, no } = payload[0].payload;
    const description = valuationData.find((val) => val.id === no)?.description || "No description available";

    return (
      <div className="custom-tooltip">
        <p className="label">{`${title}`}</p>        
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }
  return null;
};

export default Valuation;
