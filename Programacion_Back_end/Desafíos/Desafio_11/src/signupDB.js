import mongoose from "mongoose";
import {mongoUrl} from './options/keysMongo.js';

mongoose.connect(mongoUrl, {userNewUrlParser: true})
        .then (db => console.log('Mongo Atlas is connected ☁'))