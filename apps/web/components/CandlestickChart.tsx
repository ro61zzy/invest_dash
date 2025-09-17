"use client";
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface CandlestickChartProps {
  data: {
    t: number[]; // timestamps
    o: number[]; // opens
    h: number[]; // highs
    l: number[]; // lows
    c: number[]; // closes
    v: number[]; // volumes
  };
}

// Transform and filter out any undefined values
const transformData = (data: CandlestickChartProps["data"]) => {
  if (!data?.t?.length) return [];

  return data.t
    .map((timestamp, i) => ({
      date: new Date(timestamp * 1000),
      open: data.o[i],
      high: data.h[i],
      low: data.l[i],
      close: data.c[i],
      volume: data.v[i],
    }))
    .filter(
      (d): d is { date: Date; open: number; high: number; low: number; close: number; volume: number } =>
        d.open !== undefined &&
        d.high !== undefined &&
        d.low !== undefined &&
        d.close !== undefined
    );
};

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const transformedData = transformData(data);
    if (!transformedData.length) return;

    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(transformedData.map((d) => d.date.getTime().toString()))
      .range([0, width])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([d3.min(transformedData, (d) => d.low)!, d3.max(transformedData, (d) => d.high)!])
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat((d) => d3.timeFormat("%b %d")(new Date(parseInt(d as string))))
          .tickValues(x.domain().filter((_, i) => !(i % 30)))
      );

    svg.append("g").call(d3.axisLeft(y));

    // Candlesticks
    svg
      .selectAll("rect.candle")
      .data(transformedData)
      .enter()
      .append("rect")
      .attr("class", "candle")
      .attr("x", (d) => x(d.date.getTime().toString())!)
      .attr("y", (d) => y(Math.max(d.open, d.close)))
      .attr("width", x.bandwidth())
      .attr("height", (d) => Math.abs(y(d.open) - y(d.close)))
      .attr("fill", (d) => (d.close > d.open ? "#34d399" : "#ef4444"));

    // Wicks
    svg
      .selectAll("line.wick")
      .data(transformedData)
      .enter()
      .append("line")
      .attr("class", "wick")
      .attr("x1", (d) => x(d.date.getTime().toString())! + x.bandwidth() / 2)
      .attr("x2", (d) => x(d.date.getTime().toString())! + x.bandwidth() / 2)
      .attr("y1", (d) => y(d.high))
      .attr("y2", (d) => y(d.low))
      .attr("stroke", (d) => (d.close > d.open ? "#34d399" : "#ef4444"));
  }, [data]);

  return <svg ref={svgRef} className="w-full h-100 mb-7"></svg>;
};

export default CandlestickChart;
