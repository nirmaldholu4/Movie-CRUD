import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/moviesData").then(() => {
    console.log("MongoDB Connected");
}).catch(() => {
    console.log("Server Error !");
})


app.get("/", (req, res) => {
    res.json({
        msg: "Home Page !"
    });
});

const movieSchema = mongoose.Schema({
    title: String,
    genre: String,
    director: String
});

const movie = mongoose.model("movie", movieSchema);

// ================  1. Add Movies  ===================

app.post("/addMovies", async (req, res) => {
    const movieData = await movie.create(req.body);
    res.json({
        msg: " Movie Added Successfully ",
        data: movieData
    });
});

// ================  2. Display All Movies  ===================

app.get("/getAllMovies", async (req, res) => {
    const movieData = await movie.find();
    res.json({
        msg: " Movies Find Successfully ",
        data: movieData
    });
});

// ================  3. Display Speific One Movie  ===================

app.get("/getMovie", async (req, res) => {
    const movieData = await movie.findOne(req.body);

    if (!movieData) {
        return res.json({
            msg: " Movie Isn't Found "
        });
    };

    res.json({
        msg: " Movie Find SuccessFully ",
        data: movieData
    });
});
// ================  4. Update Speific Movie  ===================

app.put("/updateMovie", async (req, res) => {
    const movieData = await movie.findByIdAndUpdate(req.body.id, req.body);

    if (!movieData) {
        return res.json({
            msg: " Movie Isn't Found "
        });
    }

    res.json({
        msg: " Movie Updated SuccessFully ",
        data: movieData
    });
});


// ================  5. Delete Speific Movie  ===================

app.delete("/deleteMovie", async (req, res) => {
    const movieData = await movie.findByIdAndDelete(req.body.id);
    if (!movieData) {
        return res.json({
            msg: " Movie Isn't Found "
        });
    }
    res.json({
        msg: " Movie Deleted SuccessFully ",
        data: movieData
    });
});



app.listen(3000);