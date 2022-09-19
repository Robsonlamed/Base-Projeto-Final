// COMO USAR
<Chart series={88} width={60} height={60} options={{
  fill: { colors: "#f00" },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: { size: "45%" },
      track: { background: "#00F" },
      dataLabels: {
        name: { show: false },
        value: { offsetY: 5, fontSize: "12px", color: '#fff', fontWeight: 'bold' }
      }
    }
  }
}} type='radialBar' />