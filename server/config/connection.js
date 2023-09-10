import mongoose from "mongoose";

// tells mongoose which database we want to connect with
// 127.0..0.1:27017 is used to connect w/ the localhost
mongoose.connect(
  process.env.REACT_APP_URI || "mongodb://127.0.0.1:27017/sparks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default mongoose.connection;
