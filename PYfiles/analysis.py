import pandas as pd
import os
import matplotlib.pyplot as plt

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "..", "data", "call_center.csv")

df = pd.read_csv(DATA_PATH)

# Converter colunas de tempo para segundos
df["Talk Duration (AVG)"] = pd.to_timedelta(df["Talk Duration (AVG)"]).dt.total_seconds()
df["Answer Speed (AVG)"] = pd.to_timedelta(df["Answer Speed (AVG)"]).dt.total_seconds()

# Converter porcentagem para número
df["Answer Rate"] = df["Answer Rate"].str.replace("%", "").astype(float)

# Pergunta 1: taxa média de atendimento
avg_answer_rate = df["Answer Rate"].mean()
print(f"Average answer rate: {avg_answer_rate:.2f}%")

# Pergunta 2: duração média das chamadas
avg_talk_duration = df["Talk Duration (AVG)"].mean()
print(f"Average talk duration: {avg_talk_duration:.2f} seconds")

# Pergunta 3: relação chamadas recebidas x abandonadas
correlation = df["Incoming Calls"].corr(df["Abandoned Calls"])
print(f"Correlation between incoming and abandoned calls: {correlation:.2f}")

# Gráfico
df.plot(
    x="Index",
    y=["Incoming Calls", "Abandoned Calls"],
    kind="line",
    title="Incoming vs Abandoned Calls"
)

plt.show()
