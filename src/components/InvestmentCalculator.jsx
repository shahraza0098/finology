"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function InvestmentCalculatorDialog() {
  const [initial, setInitial] = useState(1000);
  const [contribution, setContribution] = useState(500);
  const [rate, setRate] = useState(12); // annual %
  const [years, setYears] = useState(10);
  const [frequency, setFrequency] = useState("monthly");
  const [futureValue, setFutureValue] = useState(null);

  const calculateInvestment = () => {
    const periods = frequency === "monthly" ? years * 12 : years;
    const r = frequency === "monthly" ? rate / 100 / 12 : rate / 100;

    const initialGrowth = initial * Math.pow(1 + r, periods);
    const contributionGrowth =
      contribution * ((Math.pow(1 + r, periods) - 1) / r);

    const fv = initialGrowth + contributionGrowth;
    setFutureValue(fv.toFixed(2));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition">
          Open Investment Calculator
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-6 rounded-2xl shadow-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Investment Calculator
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Estimate the growth of your investments over time
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label>Initial Investment</Label>
            <Input
              type="number"
              value={initial}
              onChange={(e) => setInitial(+e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Contribution ({frequency})</Label>
            <Input
              type="number"
              value={contribution}
              onChange={(e) => setContribution(+e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Annual Return Rate (%)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Duration (Years)</Label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label>Contribution Frequency</Label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-2 rounded-md border border-input bg-background shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>

        <Button
          onClick={calculateInvestment}
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Calculate
        </Button>

        {futureValue && (
          <div className="mt-6 p-4 bg-gray-50 rounded-xl text-center shadow-inner">
            <p className="text-sm text-gray-500">Future Value</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹ {futureValue}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
