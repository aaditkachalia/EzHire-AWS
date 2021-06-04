# Continuous Question Answering Framework

This repository is the official implementation of "Continuous Question Answering Framework".

This project is developed & deployed on React (Frontend) and Flask (Backend) along with using Firebase as our database server. 
A small video demo of the chatbot implementation is given [here](https://drive.google.com/file/d/1LsjA-ms-dmtf-1z8v82haUX1A8_rYT-h/view?usp=sharing)

## Backend  (Flask) 
The requirements file includes all the machine learning, nlp and development dependencies for the project. 

To install requirements:

```setup
pip install -r requirements.txt
```

To run the server:

```setup
python app.py 
```

## Frontend - React

To train the model(s) in the paper, run this command:

```train
python train.py --input-data <path_to_data> --alpha 10 --beta 20
```

>📋  Describe how to train the models, with example commands on how to train the models in your paper, including the full training procedure and appropriate hyperparameters.

## Evaluation

To evaluate my model on ImageNet, run:

```eval
python eval.py --model-file mymodel.pth --benchmark imagenet
```

>📋  Describe how to evaluate the trained models on benchmarks reported in the paper, give commands that produce the results (section below).

## Pre-trained Models

You can download pretrained models here:

- [My awesome model](https://drive.google.com/mymodel.pth) trained on ImageNet using parameters x,y,z. 

>📋  Give a link to where/how the pretrained models can be downloaded and how they were trained (if applicable).  Alternatively you can have an additional column in your results table with a link to the models.

## Results

Our model achieves the following performance on :

### [Image Classification on ImageNet](https://paperswithcode.com/sota/image-classification-on-imagenet)

| Model name         | Top 1 Accuracy  | Top 5 Accuracy |
| ------------------ |---------------- | -------------- |
| My awesome model   |     85%         |      95%       |

>📋  Include a table of results from your paper, and link back to the leaderboard for clarity and context. If your main result is a figure, include that figure and link to the command or notebook to reproduce it. 


## Contributing

>📋  Pick a licence and describe how to contribute to your code repository. 
