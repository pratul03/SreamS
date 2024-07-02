import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { title } = req.query;
  const titleDir = path.resolve(`./public/${title}`);

  if (!fs.existsSync(titleDir)) {
    res.status(404).json({ message: "title not found" });
    return;
  }

  const files = fs.readFileSync(titleDir);

  const episode = files
    .filter((file) => file.endsWith(".mp4"))
    .map((file) => {
      const episodeName = file.replace(".mp4", "");
      const subtitleFile = `${episodeName}.en.srt`;
      return {
        video: file,
        subtitle: subtitleFile,
      };
    });

    res.status(200).json(episode);
    
}
