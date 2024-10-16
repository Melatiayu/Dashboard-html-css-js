// Grafik Batang
const ctxBar = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['January', 'February','March','April','May','June'],
    datasets: [{
      label: 'Revenue',
      data: [12000, 19000, 3000, 5000, 2000, 3000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspecRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// pie chart pertama 

const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
const myPieChart1 = new Chart(ctxPie1, {
  type: 'pie',
  data: {
    labels: ['Rent', 'Utilities', 'Salaries','Supplies', 'Marketing'],
    datasets: [{
      label: 'Expense',
      data: [5000, 2000, 15000, 1000, 5000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspecRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

});

// pie chart pertama 

const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
const myPieChart2 = new Chart(ctxPie2, {
  type: 'pie',
  data: {
    labels: ['Product A', 'Product B', 'Product C','Product D', 'Product E'],
    datasets: [{
      label: 'Revenue',
      data: [13000, 6000, 3000, 7000, 9000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspecRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

});