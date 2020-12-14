let project = new Project('kaiser_data_layer');

project.kore = false;//No Kinc

project.addFile('../data_desk/source/data_desk.h');

project.setDebugDir('Deployment');

resolve(project);
