# Interview System using CQAF

<img src="https://github.com/aaditkachalia/Ezhire-AWS/blob/master/EzHire-Frontend/public/cqafint.JPG" width="800" height="400"/>
This repository is the official implementation of Interview system using "Continuous Question Answering Framework".

This project is developed & deployed on React (Frontend) and Flask (Backend) along with using Firebase as our database server. 
A small video demo of the chatbot implementation is given [here](https://drive.google.com/file/d/1LsjA-ms-dmtf-1z8v82haUX1A8_rYT-h/view?usp=sharing)

## Backend  (Flask) 
The requirements file includes all the machine learning, nlp and development dependencies for the project. 

To install requirements:

```setup
cd Ezhire-Backend/
pip install -r requirements.txt
```

To run the server:

```setup
python app.py 
```

## Frontend - React
```
cd EzHire-Frontend/
npm install --silent
npm run
```

You might not be able to access several features since the firebase credentials are not present in the code.


## Results

Several candidates were asked to take an interview using this system. Further based on the response and model answer, experts were asked to rate the correctness of the response. The below table lists down the error betweem the human score and score given by the system across 5 different interview. In total 52 such interviews were conducted and on an average 21% of the questions were incorrectly scored with a MAE of 0.504 where the maximum score a candidate can achieve was 5.

| Interview ID | Incorrectly Scored |  MAE  |  RMSE  |
| -------------|--------------------|-------|--------|
|0             |0.275               |0.655  |1.299   |
| -------------|--------------------|-------|--------|
|1             |0.148               |0.333  |0.922   |
| -------------|--------------------|-------|--------|
|2             |0.133               |0.4    |1.09    |
| -------------|--------------------|-------|--------|
|3             |0.259               |0.666  |1.36    |
| -------------|--------------------|-------|--------|
|4             |0.19                |0.428  |1.046   |
