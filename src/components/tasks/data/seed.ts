import fs from "fs"
import path from "path"
import tasksData from "./tasks.json"

// Export the actual data from tasks.json
const tasks = tasksData

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
)

console.log("✅ Tasks data loaded from tasks.json.")
