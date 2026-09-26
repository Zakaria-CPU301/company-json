import simpleGit from "simple-git";

const git = simpleGit();

const drawGraph = async () => {
  try {
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