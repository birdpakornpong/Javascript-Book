function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const splitText = S.split("\n");

  music = 0;
  image = 0;
  movie = 0;
  other = 0;

  splitText.forEach(function (value) {
    let mam = 0;
    const lineSplit = value.split(" ");
    const posDot = lineSplit[0].lastIndexOf(".");
    const bString = lineSplit[1].indexOf("b");
    if (bString > 0) {
      mam = lineSplit[1].slice(0, bString);
    } else {
      mam = lineSplit[1];
    }
    const type = lineSplit[0].slice(posDot + 1);

    if (type == "mp3" || type == "flac" || type == "aac") {
      music += Number(mam);
    } else if (type == "jpg" || type == "bmp" || type == "gif") {
      image += Number(mam);
    } else if (type == "mp4" || type == "avi" || type == "mkv") {
      movie += Number(mam);
    } else if (type == "7z" || type == "txt" || type == "zip") {
      other += Number(mam);
    }
  });

  return `music ${music}b\nimages ${image}b\nmovie ${movie}b\nother ${other}b`;
}

const S =
  "my.song.mp3 11b\ngreatSong.flac 1000b\nnot3.txt 5b\nvideo.mp4 200b\ngame.exe 100b\nmov!e.mkv 10000b";

console.log(solution(S));
