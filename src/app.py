import ffmpeg_streaming
from ffmpeg_streaming import Formats, Bitrate, Representation, Size
from pymongo import MongoClient
from bson.json_util import dumps
from flask import Flask, jsonify, render_template


movie_collection = None
app = Flask(__name__, template_folder="./static")


def connect_to_db():
    global movie_collection
    try:
        client = MongoClient("mongodb://localhost:27017/")
        database = client["multimedia_systems"]
        collection = database["movie"]
        movie_collection = collection
        return collection
    except Exception as e:
        print("Error while connecting to database", e)


def dash():
    _144p = Representation(Size(256, 144), Bitrate(95 * 1024, 64 * 1024))
    _240p = Representation(Size(426, 240), Bitrate(150 * 1024, 94 * 1024))
    _360p = Representation(Size(640, 360), Bitrate(276 * 1024, 128 * 1024))

    for i in range(1, 3):
        video = ffmpeg_streaming.input("./movies_trailer/" + str(i) + ".mp4")
        dash = video.dash(Formats.h264())
        dash.representations(_144p, _240p, _360p)
        dash.output("./static/dash/" + str(i) + "/" + str(i) + ".mpd")


@app.route('/')
def main_page():
    return render_template("index.html")


@app.route('/api/movies')
def show_all_movies():
    cursor = movie_collection.find({})
    return dumps(cursor)


@app.route('/api/movies/<movie_id>')
def show_movie(movie_id):
    cursor = movie_collection.find_one({"movie_id": int(movie_id)})
    return dumps(cursor)


if __name__ == "__main__":
    # dash()
    connect_to_db()
    app.run(host='localhost', port=8000)

