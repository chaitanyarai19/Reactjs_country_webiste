const { exec } = require("child_process");
const chokidar = require("chokidar");

console.log("🚀 Auto Git Commit & Push is running...");

let isPushing = false;
let timeout;

const watcher = chokidar.watch(".", {
  ignored: /node_modules|\.git|dist|build/,
  persistent: true,
});

watcher.on("ready", () => {
  console.log("👀 Watching for changes...");
});

watcher.on("change", (path) => {
  console.log(`📁 Changed: ${path}`);

  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(() => {
    if (isPushing) return;
    isPushing = true;

    exec("git status --porcelain", (err, stdout) => {
      if (!stdout.trim()) {
        console.log("⚠️ No changes to commit.");
        isPushing = false;
        return;
      }

      const message = `${path} - ${new Date().toLocaleString()}`;

      exec(
        `git add . && git commit -m "${message}" && git push`,
        (err2) => {
          if (err2) {
            console.log("❌ Git Error:", err2.message);
          } else {
            console.log("✅ Auto-pushed to GitHub ✔️");
          }
          isPushing = false;
        }
      );
    });
  }, 5000);
});
