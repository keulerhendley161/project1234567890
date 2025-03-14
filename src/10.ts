import numpy as np
from sklearn import preprocessing
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

X = df[['age', 'income']]
y = df['debt']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Feature scaling
scaler = preprocessing.StandardScaler().fit(X_train)
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train the model
reg = LinearRegression()
reg.fit(X_train_scaled, y_train)

# Predict on test set
y_pred = reg.predict(X_test_scaled)

# Evaluate performance
mse = np.mean((y_pred - y_test) ** 2)
r2 = reg.score(X_test_scaled, y_test)
print("MSE:", mse)
print("R-squared:", r2)