const {exec} = require('child_process');
const chokidar = require('chokidar');

console.log('Auto-push script started. Watching for file changes...');

chokidar.watch('./src').on('all', (event, path) => {
    if (event === 'change' || event === 'add' || event === 'unlink') {
        console.log(`File ${path} has been ${event}. Preparing to push changes...`);
        
        exec('git add .', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error adding files: ${stderr}`);
                return;
            }
            const commitMessage = `Auto-commit: ${event} ${path}`;
            exec(`git commit -m "${commitMessage}"`, (err, stdout, stderr) => {
                if (err) {
                    console.error(`Error committing changes: ${stderr}`);
                    return;
                }
                exec('git push', (err, stdout, stderr) => {
                    if (err) {
                        console.error(`Error pushing to remote: ${stderr}`);
                        return;
                    }
                    console.log('Changes pushed to remote repository successfully.');
                });
            });
        });
    }
});