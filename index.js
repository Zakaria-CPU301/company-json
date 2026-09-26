import simpleGit from "simple-git";
import jsonfile from "jsonfile";

const git = simpleGit();
const path = "./data.json";

const drawGraph = async () => {
  try {
    const date = new Date().toISOString();

    await jsonfile.writeFile(path, { date }, { spaces: 2 });

    const status = await git.status();

    if (status.isClean()) {
      console.log("Tidak ada perubahan untuk di-commit.");
      return;
    }

    await git.add(".");
    await git.commit("Update project");

    console.log("Commit berhasil!");

    await git.push("origin2", "main");

    console.log("Push berhasil!");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
};

drawGraph();