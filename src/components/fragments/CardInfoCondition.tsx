"use client";

import { useEffect, useState } from "react";
import { getTimeNow } from "@/lib/utils/FormatedTime";
import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import {
  Cloud,
  Droplets,
  CloudRain,
  Waves,
  Bolt,
  Lightbulb,
  Bell,
  Calendar,
  Sun,
} from "lucide-react";
import axios from "axios";

interface Props {
  airQuality: string;
  rainfall: string;
  waterQuality: string;
  electricityEfficiency: string;
  lightingCondition: string;
  warningSystem: string;
}

const CardInfoCondition = (props: Props) => {
  const [temperature, setTemperature] = useState<string>("0°C");
  const [humidity, setHumidity] = useState<string>("0%");

  useEffect(() => {
  axios
    .get("https://fathschool.smkn1kawali.sch.id/api/iot")
    .then((res) => {
      console.log(" Data dari API:", res.data);
      const sensor = res.data.data;

      setTemperature(sensor.temperature ? `${sensor.temperature}°C` : "0°C");
      setHumidity(sensor.humidity ? `${sensor.humidity}%` : "0%");
    })
    .catch((err) => {
      console.error(" Gagal ambil data:", err);
    });
}, []);


  return (
    <Card className="max-w-full shadow-md p-4">
      <CardBody>
        <div className="flex gap-2 items-center mt-1">
          <Calendar size={18} />
          <p>{getTimeNow()}</p>
        </div>
        <Divider className="my-4" />

        {/* ✅ SUHU */}
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="flat" radius="full" color="primary" className="h-16 w-16">
            <Sun size={32} />
          </Button>
          <div>
            <h2>{temperature}</h2>
            <small>Suhu Saat Ini</small>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="border rounded-xl p-4">
            <div className="flex gap-2 items-center mb-1">
              <Cloud size={18} />
              <p>Kualitas Udara</p>
            </div>
            <h3>{props.airQuality ?? "Baik"}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex gap-2 items-center mb-1">
              <Droplets size={18} />
              <p>Kelembaban</p>
            </div>
            <h3>{humidity}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex gap-2 items-center mb-1">
              <CloudRain size={18} />
              <p>Curah Hujan</p>
            </div>
            <h3>{props.rainfall ?? "0mm"}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex gap-2 items-center mb-1">
              <Waves size={18} />
              <p>Kualitas Air</p>
            </div>
            <h3>{props.waterQuality ?? "Bersih"}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex gap-2 items-center mb-1">
              <Bolt size={18} />
              <p>Efisiensi Listrik</p>
            </div>
            <h3>{props.electricityEfficiency ?? "0%"}</h3>
          </div>

          <div className="border rounded-xl p-4">
            <div className="flex gap-2 items-center mb-1">
              <Lightbulb size={18} />
              <p>Kondisi Penerangan</p>
            </div>
            <h3>{props.lightingCondition ?? "Cukup"}</h3>
          </div>
        </div>

        <Divider className="my-4" />
        <div className="flex gap-2 items-center">
          <Bell size={18} />
          <p>Peringatan: {props.warningSystem ?? "Normal"}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardInfoCondition;
