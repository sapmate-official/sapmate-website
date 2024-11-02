import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

// Extend the NodeJS global type
declare global {
    // eslint-disable-next-line no-var
    var mongoose: MongooseCache | undefined;
}

interface GlobalWithMongoose {
    mongoose?: MongooseCache;
}

// Cast the global object to include our mongoose property
const globalWithMongoose = global as GlobalWithMongoose;

// Initialize the cached object as a constant
const cached: MongooseCache = (globalWithMongoose.mongoose ?? {
    conn: null,
    promise: null
});

// Only set global.mongoose if it's not already set
if (!globalWithMongoose.mongoose) {
    globalWithMongoose.mongoose = cached;
}

async function connectToDatabase(): Promise<typeof mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const options = {
            bufferCommands: false,
        };

        cached.promise = mongoose
            .connect(MONGODB_URI!, options)
            .then((mongoose) => mongoose);
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
}

export default connectToDatabase;