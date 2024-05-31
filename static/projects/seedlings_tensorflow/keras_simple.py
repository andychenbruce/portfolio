#!/usr/bin/env python

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from keras.preprocessing.image import ImageDataGenerator

model = keras.Sequential(
    [
	layers.Conv2D(32, (3, 3), input_shape=(150, 150, 3)),# input shape 255x255 pixels, 3 channels for RGB
	layers.Activation('relu'),
	layers.MaxPooling2D(pool_size=(2, 2)),
	
	layers.Conv2D(32, (3, 3)),
	layers.Activation('relu'),
	layers.MaxPooling2D(pool_size=(2, 2)),

	    layers.Conv2D(32, (3, 3)),
	layers.Activation('relu'),
	layers.MaxPooling2D(pool_size=(2, 2)),

	    
	    layers.Flatten(),
	layers.Dense(64),
	layers.Activation('relu'),
	layers.Dropout(0.5),
	layers.Dense(12, activation="softmax") #the kaggle data has 12 seedling categories
    ]
)

model.compile(loss='categorical_crossentropy', #because seeds aren't binary, have 12 categories
              optimizer='rmsprop',
              metrics=['accuracy'])

model.summary()
