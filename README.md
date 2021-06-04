# Interview System using CQAF

![Header Image](./EzHire-Frontend/public/cqafint.jpg?raw=true)

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

Our model achieves the following performance on :

### [Image Classification on ImageNet](https://paperswithcode.com/sota/image-classification-on-imagenet)

| Model name         | Top 1 Accuracy  | Top 5 Accuracy |
| ------------------ |---------------- | -------------- |
| My awesome model   |     85%         |      95%       |

>📋  Include a table of results from your paper, and link back to the leaderboard for clarity and context. If your main result is a figure, include that figure and link to the command or notebook to reproduce it. 


## Contributing

>📋  Pick a licence and describe how to contribute to your code repository. 
