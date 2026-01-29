import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho do dataset
const dataPath = path.join(__dirname, '..', 'data', 'calls.json');

// Função para carregar os dados
function loadCallData() {
  const rawData = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(rawData);
}

// Execução básica
const calls = loadCallData();
console.log(`Total calls loaded: ${calls.length}`);



// Função para agrupar chamadas por data
function groupCallsByDate(calls) {
  const callsByDate = {};

  calls.forEach(call => {
    const date = call.startTime.split('T')[0]; // YYYY-MM-DD

    if (!callsByDate[date]) {
      callsByDate[date] = [];
    }

    callsByDate[date].push(call);
  });

  return callsByDate;
}

// Agrupando chamadas por data
const callsByDate = groupCallsByDate(calls);

console.log('\nCalls per date:');
for (const date in callsByDate) {
  console.log(`${date}: ${callsByDate[date].length} calls`);
}



// Função para agrupar chamadas por agente
function groupCallsByAgent(calls) {
  const callsByAgent = {};

  calls.forEach(call => {
    const agentId = call.agentId;

    if (!callsByAgent[agentId]) {
      callsByAgent[agentId] = [];
    }

    callsByAgent[agentId].push(call);
  });

  return callsByAgent;
}

// Agrupando chamadas por agente
const callsByAgent = groupCallsByAgent(calls);

console.log('\nCalls per agent:');
for (const agent in callsByAgent) {
  console.log(`${agent}: ${callsByAgent[agent].length} calls`);
}



// Função para calcular a duração média das chamadas
function calculateAverageCallDuration(calls) {
  if (calls.length === 0) return 0;

  const totalDuration = calls.reduce(
    (sum, call) => sum + call.durationSeconds,
    0
  );

  return totalDuration / calls.length;
}

// Calculando a duração média das chamadas
const averageDuration = calculateAverageCallDuration(calls);
console.log(`\nAverage call duration: ${averageDuration.toFixed(2)} seconds`);

// Calculando a duração média das chamadas por agente
console.log('\nAverage duration per agent:');
for (const agent in callsByAgent) {
  const avg = calculateAverageCallDuration(callsByAgent[agent]);
  console.log(`${agent}: ${avg.toFixed(2)} seconds`);
}



// Função para calcular a taxa de conformidade
function calculateComplianceRate(calls) {
  if (calls.length === 0) return 0;

  const compliantCalls = calls.filter(call => call.compliant).length;
  return (compliantCalls / calls.length) * 100;
}

// Calculando a taxa de conformidade geral
const overallCompliance = calculateComplianceRate(calls);
console.log(`\nOverall compliance rate: ${overallCompliance.toFixed(2)}%`);

// Calculando a taxa de conformidade por agente
console.log('\nCompliance rate per agent:');
for (const agent in callsByAgent) {
  const rate = calculateComplianceRate(callsByAgent[agent]);
  console.log(`${agent}: ${rate.toFixed(2)}%`);
}
