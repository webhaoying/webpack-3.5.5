#说明
components文件中，严格按照命名规范命名后的文件夹，以及文件夹下边的js、css文件，都是针对这个文件夹而书写的，因此，可以认为，每个文件夹中的文件，只在对应的文件引用，
比如：
registerComponent 中的js、css文件，都将被components同级目录下的containers内的register引用，具体的引用方式，就是在register文件夹下的register.js中import进来
## 这个hello组件是为了练手redux