const expressEdge = require("express-edge");
const express = require("express");
const edge = require("edge.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const connectMongo = require("connect-mongo");
const connectFlash = require("connect-flash");
const cloudinary = require("cloudinary")


const createPostController = require("./controllers/createPost");
const homePageController = require("./controllers/homePage");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const createUserController = require("./controllers/createUser");
const updateUserController = require("./controllers/updateUser")
const storeUserController = require("./controllers/storeUser");
const storeDoctorController = require("./controllers/storeDoctor")
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const logoutController = require("./controllers/logout");
const deletePostController = require("./controllers/deletePost")
const storeSubDepartmentController = require("./controllers/storeSubDepartment")
const storeDepartmentController = require("./controllers/storeDepartment")
const doctorManagementController = require("./controllers/doctorManagement")
const deleteDoctorController = require("./controllers/deleteDoctor")
const subdepartmentManagementController = require("./controllers/subdepartmentManagement")
const deletesubDepartmentController = require("./controllers/deletesubDepartment")
const departmentManagementController = require("./controllers/departmentManagement")
const deleteDepartmentController = require("./controllers/deleteDepartment")
const userManagementController = require("./controllers/userManagement")
const deleteUserController = require("./controllers/deleteUser")
const outerPostController = require("./controllers/outerPost")
const doctorDetailsController = require("./controllers/doctorDetails")




const app = new express();
mongoose.connect("mongodb://localhost/roaster");

app.use(connectFlash());

const mongoStore = connectMongo(expressSession);

app.use(
  expressSession({
    secret: "secret",
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.use("*", (req, res, next) => {
  edge.global("auth", req.session.userId);
  next();
});

app.use('*', (req ,res , next) => {

  edge.global('Admin',req.session.userDepartment === "Admin")

  next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storePost = require("./middleware/storePost");
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require("./middleware/redirectIfAuthenticated");

app.get("/", homePageController);
app.get("/post/:id", getPostController);
app.get("/delete/:id",deletePostController)
app.get("/auth/logout", auth, logoutController);
app.get("/posts/new", auth, createPostController);
app.post("/posts/store", auth, storePostController);
app.get("/auth/login", redirectIfAuthenticated, loginController);
app.post("/users/login", redirectIfAuthenticated, loginUserController);
app.get("/auth/register", createUserController);
app.post("/users/register", storeUserController);
app.post("/doctor/store",auth,storeDoctorController)
app.post("/subDepartment/store",auth,storeSubDepartmentController)
app.post("/Department/store",auth,storeDepartmentController)
app.post("/users/update",auth,updateUserController)
app.get("/doctorManagement",auth,doctorManagementController)
app.get("/doctor/:id",auth,deleteDoctorController)
app.get("/subdepartmentManagement",auth,subdepartmentManagementController)
app.get("/subDepartment/:id",auth,deletesubDepartmentController)
app.get("/departmentManagement",auth,departmentManagementController)
app.get("/department/:id",auth,deleteDepartmentController)
app.get("/userManagement",auth,userManagementController)
app.get("/user/:id",auth,deleteUserController)
app.get("/todaysPost/:id",outerPostController)
app.get("/docDetails/:name",doctorDetailsController)
app.use((req, res) => res.render('not-found'));


app.listen(4000, () => {
  console.log(`App listening on port 4000`);
});
