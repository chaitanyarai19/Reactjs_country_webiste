const { exec } = require("child_process");
const chokidar = require("chokidar");

console.log("🚀 Auto Git Commit & Push is running...");

chokidar.watch(".", {
  ignored: /node_modules|.git/,
  persistent: true,
}).on("change", (path) => {
  console.log(`📁 File changed: ${path}`);
  console.log("💾 Committing & pushing to GitHub...");

  exec('git add . && git commit -m "auto commit" && git push', (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Error:", err);
      return;
    }
    console.log("✅ Auto-pushed to GitHub\n", stdout);
  });
});
