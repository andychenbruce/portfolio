import React from "react";

import Wrapper from "../../wrapper.js";
import { AndyCodeBlock } from "../../include_code.js";

function SeedlingTensorflor({title}: {title: string}) {
  let new_heads = (
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
    />
  );

  return (
    <Wrapper head={new_heads} title={title}>
      <p>
        To make a{" "}
        <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network">
          convolutional neural network
        </a>{" "}
        using <a href="https://en.wikipedia.org/wiki/Keras">Keras</a> the code
        is easy and is just:
      </p>
      <AndyCodeBlock
        source_path="static/projects/seedlings_tensorflow/keras_simple.py"
        language="python"
      />

      <p>
        I chose the shape of the neural network arbitrarily but anyone can
        change the shape and kernel sizes of the convolutional layers to
        whatever they want. At the end, it is flattened and compressed into 12
        outputs because the{" "}
        <a href="https://www.kaggle.com/c/plant-seedlings-classification/data">
          data set I am going to be testing on
        </a>{" "}
        has 12 categories of seedlings. The twelve{" "}
        <a href="https://en.wikipedia.org/wiki/Softmax_function">softmax</a>{" "}
        outputs represent the probability of each seedling classification and
        sum to 1.0.
      </p>

      <br />

      <p>
        To run the model on the data I put the training data in ./data/train and
        the validation data in ./data/test. Keras has an easy to use tool called
        the image data generator. You can give it a folder of training data and
        each sub-folder will be a category of that data. For example
        ./data/train/Charlock is a category and ./data/train/Cleavers is another
        category. There are 12 total subfolders and thus 12 categories of
        plants.
      </p>

      <br />
      <img width="700" height="478" src="seedlings_examples.jpg" />
      <br />
      <p>
        The really cool part about the image data generator is that it can
        automatically shift around, rotate, and flip the image to force the AI
        to be more robust and prevent overfitting. Here you can see it randomly
        rotates it between 0 and 180 degrees, shifts the image up and down
        randomly 20%, sheers and zooms randomly 20%, and randomly flips it
        horizontally and vertically.
      </p>

      <AndyCodeBlock
        source_path="static/projects/seedlings_tensorflow/data_generator.py"
        language="python"
      />

      <p>
        After running, it will save the outout to the .h5 file which can then be
        loaded again to either use or train more
      </p>
      <hr />

      <hr className="clearLeft" />
    </Wrapper>
  );
}

export default SeedlingTensorflor;
