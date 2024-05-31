batch_size = 16

train_datagen = ImageDataGenerator(
    rotation_range=180,
    width_shift_range=0.2,
    height_shift_range=0.2,
    rescale=1./255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    vertical_flip=True,
    fill_mode='nearest')

test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    'data/train',
    target_size=(150, 150),#must be same as input shape
    batch_size=batch_size,
    class_mode='categorical') #same as compile loss

# this is a similar generator, for validation data
validation_generator = test_datagen.flow_from_directory(
    'data/test',
    target_size=(150, 150),
    batch_size=batch_size,
    class_mode='categorical')

model.fit_generator(
    train_generator,
    steps_per_epoch=2000,
    epochs=50,
    validation_data = validation_generator,
    validation_steps=800
)

mode.save_weights('output.h5') #save to be loaded later
